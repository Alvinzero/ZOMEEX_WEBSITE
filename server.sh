#!/bin/bash
# Local development server for the ZOMEE WordPress site.
#
#   ./server.sh start     start MariaDB (if needed) + PHP server on :8000
#   ./server.sh stop      stop the PHP server
#   ./server.sh restart   restart the PHP server
#   ./server.sh status    show what is running
#
# Site:   http://localhost:8000
# Admin:  http://localhost:8000/wp-admin

set -u

PORT=8000
DIR="$( cd "$( dirname "${BASH_SOURCE[0]}" )" && pwd )"
LOG="/tmp/zomee-server.log"
PIDFILE="/tmp/zomee-server.pid"

is_running() {
	[ -f "$PIDFILE" ] && kill -0 "$(cat "$PIDFILE")" 2>/dev/null
}

db_ready() {
	mysqladmin -h 127.0.0.1 -uroot -proot ping >/dev/null 2>&1
}

start() {
	if is_running; then
		echo "PHP server already running (pid $(cat "$PIDFILE"))"
	else
		if ! db_ready; then
			echo "Starting MariaDB..."
			brew services start mariadb >/dev/null 2>&1
			for _ in $(seq 1 30); do db_ready && break; sleep 1; done
		fi
		db_ready && echo "MariaDB ready" || { echo "MariaDB failed to start"; exit 1; }

		lsof -ti "tcp:$PORT" | xargs kill -9 2>/dev/null
		sleep 1
		cd "$DIR" || exit 1
		PHP_CLI_SERVER_WORKERS=8 nohup php -S "localhost:$PORT" router.php > "$LOG" 2>&1 &
		echo $! > "$PIDFILE"
		sleep 2
		echo "PHP server running (pid $(cat "$PIDFILE")) on http://localhost:$PORT"
	fi
}

stop() {
	if is_running; then
		kill "$(cat "$PIDFILE")" 2>/dev/null
		rm -f "$PIDFILE"
		echo "PHP server stopped"
	else
		lsof -ti "tcp:$PORT" | xargs kill -9 2>/dev/null
		echo "PHP server not running"
	fi
}

case "${1:-start}" in
	start)   start ;;
	stop)    stop ;;
	restart) stop; sleep 1; start ;;
	status)
		is_running && echo "PHP server: running (pid $(cat "$PIDFILE"))" || echo "PHP server: stopped"
		db_ready && echo "MariaDB:    running" || echo "MariaDB:    stopped"
		;;
	*) echo "Usage: $0 {start|stop|restart|status}" ; exit 1 ;;
esac

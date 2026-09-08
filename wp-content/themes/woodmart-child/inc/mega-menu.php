<?php
/**
 * Full-width mega menu helpers for the ZOMEEX header.
 */

function zomeex_nav_icon( $name ) {
	$paths = array(
		'bag'      => '<path d="M6 8h12l-1 12H7L6 8z"/><path d="M9 8V7a3 3 0 0 1 6 0v1"/>',
		'box'      => '<path d="M4 8h16v12H4z"/><path d="M4 12h16"/><path d="M12 8v12"/>',
		'bottle'   => '<path d="M10 4h4v3l2 2v11H8V9l2-2z"/>',
		'tin'      => '<ellipse cx="12" cy="7" rx="7" ry="3"/><path d="M5 7v10c0 1.7 3.1 3 7 3s7-1.3 7-3V7"/>',
		'display'  => '<path d="M4 6h16v10H4z"/><path d="M9 20h6"/><path d="M12 16v4"/>',
		'leaf'     => '<path d="M5 19c8-1 13-8 14-14-6 1-13 6-14 14z"/><path d="M8 16c2-3 5-6 9-8"/>',
		'flask'    => '<path d="M9 3h6"/><path d="M10 3v6L6 18a2 2 0 0 0 1.8 3h8.4A2 2 0 0 0 18 18l-4-9V3"/>',
		'download' => '<path d="M12 4v10"/><path d="M8 10l4 4 4-4"/><path d="M5 19h14"/>',
		'file'     => '<path d="M7 4h7l5 5v11H7z"/><path d="M14 4v5h5"/>',
		'book'     => '<path d="M5 5h6a3 3 0 0 1 3 3v11H8a3 3 0 0 0-3 3z"/><path d="M19 5h-6a3 3 0 0 0-3 3v11h6a3 3 0 0 1 3 3z"/>',
		'building' => '<path d="M5 20V6l7-3 7 3v14"/><path d="M9 20v-6h6v6"/><path d="M9 9h.01M15 9h.01M9 13h.01M15 13h.01"/>',
		'phone'    => '<path d="M7 4h4l1 4-2 1a10 10 0 0 0 5 5l1-2 4 1v4c0 1-1 2-2 2C10 19 5 14 5 6c0-1 1-2 2-2z"/>',
		'chat'     => '<path d="M5 6h14v9H8l-3 3z"/>',
		'scale'    => '<path d="M12 4v16"/><path d="M6 8h12"/><path d="M6 8l-3 6h6z"/><path d="M18 8l-3 6h6z"/>',
		'arrow'    => '<path d="M7 17L17 7"/><path d="M9 7h8v8"/>',
	);
	$d = isset( $paths[ $name ] ) ? $paths[ $name ] : $paths['box'];

	return '<span class="zomeex-mega-menu__mark"><svg class="zomeex-mega-menu__icon" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.6" stroke-linecap="round" stroke-linejoin="round" aria-hidden="true" focusable="false">' . $d . '</svg></span>';
}

function zomeex_nav_arrow() {
	return '<svg class="zomeex-mega-menu__arrow" viewBox="0 0 16 16" fill="none" stroke="currentColor" stroke-width="1.4" stroke-linecap="round" stroke-linejoin="round" aria-hidden="true" focusable="false"><path d="M4.5 11.5 11.5 4.5"/><path d="M6.5 4.5h5v5"/></svg>';
}

function zomeex_render_mega_menu( $args ) {
	$id          = isset( $args['id'] ) ? $args['id'] : '';
	$labelledby  = isset( $args['labelledby'] ) ? $args['labelledby'] : '';
	$intro       = isset( $args['intro'] ) ? $args['intro'] : array();
	$catalog     = isset( $args['catalog'] ) ? $args['catalog'] : array();
	$rails       = isset( $args['rails'] ) ? $args['rails'] : array();
	$feature     = isset( $args['feature'] ) ? $args['feature'] : array();
	$groups      = isset( $catalog['groups'] ) ? $catalog['groups'] : array();
	$group_count = max( 1, count( $groups ) );
	$group_mod   = $group_count < 4 ? $group_count : 4;

	ob_start();
	?>
	<div class="zomeex-mega-menu" id="<?php echo esc_attr( $id ); ?>" data-nav-dropdown-panel<?php echo $labelledby ? ' aria-labelledby="' . esc_attr( $labelledby ) . '"' : ''; ?> hidden>
		<div class="zomeex-mega-menu__inner zomeex-container">
			<div class="zomeex-mega-menu__main">
				<?php if ( ! empty( $intro ) ) : ?>
					<div class="zomeex-mega-menu__intro">
						<?php if ( ! empty( $intro['kicker'] ) ) : ?>
							<p class="zomeex-mega-menu__label"><?php echo esc_html( $intro['kicker'] ); ?></p>
						<?php endif; ?>
						<?php if ( ! empty( $intro['title'] ) ) : ?>
							<h2><?php echo esc_html( $intro['title'] ); ?></h2>
						<?php endif; ?>
						<?php if ( ! empty( $intro['link'] ) ) : ?>
							<a href="<?php echo esc_url( $intro['link'] ); ?>"><?php echo esc_html( isset( $intro['link_label'] ) ? $intro['link_label'] : 'View all' ); ?> <?php echo zomeex_nav_arrow(); // phpcs:ignore WordPress.Security.EscapeOutput.OutputNotEscaped ?></a>
						<?php endif; ?>
					</div>
				<?php endif; ?>
				<?php if ( $groups ) : ?>
					<div class="zomeex-mega-menu__catalog" data-group-count="<?php echo esc_attr( (string) $group_mod ); ?>">
						<?php if ( ! empty( $catalog['label'] ) ) : ?>
							<p class="zomeex-mega-menu__label"><?php echo esc_html( $catalog['label'] ); ?></p>
						<?php endif; ?>
						<div class="zomeex-mega-menu__groups">
							<?php foreach ( $groups as $group ) : ?>
								<section class="zomeex-mega-menu__group">
									<a class="zomeex-mega-menu__group-title" href="<?php echo esc_url( $group['url'] ); ?>">
										<?php echo zomeex_nav_icon( isset( $group['icon'] ) ? $group['icon'] : 'box' ); // phpcs:ignore WordPress.Security.EscapeOutput.OutputNotEscaped ?>
										<strong><?php echo esc_html( $group['name'] ); ?></strong>
									</a>
									<?php if ( ! empty( $group['children'] ) ) : ?>
										<ul>
											<?php foreach ( $group['children'] as $child ) : ?>
												<li><a href="<?php echo esc_url( $child['url'] ); ?>"><?php echo esc_html( $child['name'] ); ?></a></li>
											<?php endforeach; ?>
										</ul>
									<?php endif; ?>
								</section>
							<?php endforeach; ?>
						</div>
					</div>
				<?php endif; ?>
			</div>
			<?php if ( $rails ) : ?>
				<div class="zomeex-mega-menu__rail">
					<?php foreach ( $rails as $rail ) : ?>
						<section class="zomeex-mega-menu__rail-block">
							<?php if ( ! empty( $rail['label'] ) ) : ?>
								<p class="zomeex-mega-menu__label"><?php echo esc_html( $rail['label'] ); ?></p>
							<?php endif; ?>
							<ul>
								<?php foreach ( $rail['items'] as $item ) : ?>
									<li>
										<a href="<?php echo esc_url( $item['url'] ); ?>">
											<?php echo zomeex_nav_icon( isset( $item['icon'] ) ? $item['icon'] : 'arrow' ); // phpcs:ignore WordPress.Security.EscapeOutput.OutputNotEscaped ?>
											<span><?php echo esc_html( $item['name'] ); ?></span>
										</a>
									</li>
								<?php endforeach; ?>
							</ul>
						</section>
					<?php endforeach; ?>
				</div>
			<?php endif; ?>
			<?php if ( ! empty( $feature ) ) : ?>
				<aside class="zomeex-mega-menu__feature">
					<?php if ( ! empty( $feature['image'] ) ) : ?>
						<div class="zomeex-mega-menu__feature-media">
							<img src="<?php echo esc_url( $feature['image'] ); ?>" alt="<?php echo esc_attr( isset( $feature['image_alt'] ) ? $feature['image_alt'] : '' ); ?>" loading="lazy" width="640" height="640">
						</div>
					<?php endif; ?>
					<div class="zomeex-mega-menu__feature-copy">
						<?php if ( ! empty( $feature['kicker'] ) ) : ?>
							<p class="zomeex-mega-menu__label"><?php echo esc_html( $feature['kicker'] ); ?></p>
						<?php endif; ?>
						<?php if ( ! empty( $feature['title'] ) ) : ?>
							<h3><?php echo esc_html( $feature['title'] ); ?></h3>
						<?php endif; ?>
						<?php if ( ! empty( $feature['copy'] ) ) : ?>
							<p><?php echo esc_html( $feature['copy'] ); ?></p>
						<?php endif; ?>
						<?php if ( ! empty( $feature['link'] ) ) : ?>
							<a href="<?php echo esc_url( $feature['link'] ); ?>"><?php echo esc_html( isset( $feature['link_label'] ) ? $feature['link_label'] : 'Learn more' ); ?> <?php echo zomeex_nav_arrow(); // phpcs:ignore WordPress.Security.EscapeOutput.OutputNotEscaped ?></a>
						<?php endif; ?>
					</div>
					<?php if ( ! empty( $feature['help_link'] ) ) : ?>
						<a class="zomeex-mega-menu__help" href="<?php echo esc_url( $feature['help_link'] ); ?>">
							<?php echo zomeex_nav_icon( 'chat' ); // phpcs:ignore WordPress.Security.EscapeOutput.OutputNotEscaped ?>
							<span>
								<strong><?php echo esc_html( isset( $feature['help_label'] ) ? $feature['help_label'] : 'Need quick help?' ); ?></strong>
								<?php if ( ! empty( $feature['help_copy'] ) ) : ?>
									<small><?php echo esc_html( $feature['help_copy'] ); ?></small>
								<?php endif; ?>
							</span>
						</a>
					<?php endif; ?>
				</aside>
			<?php endif; ?>
		</div>
	</div>
	<?php
	return ob_get_clean();
}

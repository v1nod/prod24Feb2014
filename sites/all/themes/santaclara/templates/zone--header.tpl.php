<?php
/**
 * @file
 * Alpha's theme implementation to display a zone.
 */
?>
<?php if ($wrapper): ?><div<?php print $attributes; ?>><?php endif; ?>
    <div<?php print $content_attributes; ?>>
        <?php print render(block_get_blocks_by_region('easy_breadcrumbs')); ?>   <!-- Added by Astha  -->
        <?php //if ($breadcrumb): ?> <!-- Commented by Astha -->
<!--            <div id="breadcrumb" class="grid-<?php print $columns; ?>"><?php print $breadcrumb; ?></div>-->
        <?php //endif; ?>    
        <?php print $content; ?>
    </div>
    <?php if ($wrapper): ?></div><?php endif; ?>
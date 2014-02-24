<?php

/**
 * @file
 * Customize confirmation screen after successful submission.
 *
 * This file may be renamed "webform-confirmation-[nid].tpl.php" to target a
 * specific webform e-mail on your site. Or you can leave it
 * "webform-confirmation.tpl.php" to affect all webform confirmations on your
 * site.
 *
 * Available variables:
 * - $node: The node object for this webform.
 * - $confirmation_message: The confirmation message input by the webform author.
 * - $sid: The unique submission ID of this submission.
 */
?>

<div class="webform-confirmation">
  <?php if ($confirmation_message): ?>
    <?php print $confirmation_message ?>
  <?php else: ?>
    <p><?php print t('Thank you, your submission has been received.'); ?></p>
  <?php endif; ?>
</div>

<div class="links">
    <!-- Added by Astha starts -->
    <?php if(($node->nid == '60224') || ($node->nid == '60236')): ?>    <!-- for chinese -->
        <a href="<?php print url('node/' . $node->nid) ?>"><?php print t('返回表格。') ?></a>
        
        <?php 
        elseif (($node->nid == '60232') || ($node->nid == '60235')) : ?>  <!-- for vietnamese -->
        <a href="<?php print url('node/' . $node->nid) ?>"><?php print t('Trở lại mẫu đơn.') ?></a>
        
        <?php
        elseif (($node->nid == '60231') || ($node->nid == '60234')) : ?>  <!-- for spanish -->
        <a href="<?php print url('node/' . $node->nid) ?>"><?php print t('Volver a la forma.') ?></a>
        
    <?php else : ?>
        <a href="<?php print url('node/' . $node->nid) ?>"><?php print t('Go back to the form') ?></a>
    <?php endif ?>
</div>

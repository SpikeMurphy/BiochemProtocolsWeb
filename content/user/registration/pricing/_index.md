+++
date = '2025-12-27T18:37:48+01:00'
draft = false
construction = false
title = 'Pricing'
subtitle = 'Choose the plan that fits your workflow'
author = 'Spike Murphy Müller'
version = ''
version_explanation = ''
updated = ''
finished = false
tested = false
+++

{{< pricing_table_public >}}

{{< pricing_table_stripe >}}

<div id="subscription-message" style="display:none; margin-top:1rem;"></div>

<script>
(() => {
  const params = new URLSearchParams(window.location.search);
  const msg = document.getElementById("subscription-message");

  if (params.get("success")) {
    msg.textContent = "✅ Subscription successful! You now have access.";
    msg.style.display = "block";
  }

  if (params.get("canceled")) {
    msg.textContent = "❌ Subscription canceled. No charges were made.";
    msg.style.display = "block";
  }
})();
</script>

<script> // popup login after redirect, needs to stay in this file
document.addEventListener('DOMContentLoaded', () => {
    const params = new URLSearchParams(window.location.search);
    if (
        params.get('login') === '1' &&
        !window.auth?.user
    ) {
        const wrapper = document.querySelector('.wrapper_login');
        const overlay = document.querySelector('.login_overlay');
        if (wrapper && overlay) {
        wrapper.classList.add('active_popup');
        overlay.classList.add('active');
        document.body.style.overflow = 'hidden';
        }
    }
});
</script>

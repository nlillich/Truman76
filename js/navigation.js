// Mobile Menu Toggle
document.addEventListener('DOMContentLoaded', function() {
    const mobileMenuToggle = document.getElementById('mobile-header-left-menu');
    const mobileMenu = document.getElementById('mobile-header-left-nav');
    const body = document.body;

    // Create overlay element if it doesn't exist
    let overlay = document.querySelector('.mobile-menu-overlay');
    if (!overlay) {
        overlay = document.createElement('div');
        overlay.className = 'mobile-menu-overlay';
        document.body.appendChild(overlay);
    }

    if (mobileMenuToggle && mobileMenu) {
        mobileMenuToggle.addEventListener('click', function(e) {
            e.preventDefault();
            const isOpen = mobileMenu.classList.contains('open');

            if (isOpen) {
                closeMobileMenu();
            } else {
                openMobileMenu();
            }
        });

        // Close mobile menu when clicking overlay
        overlay.addEventListener('click', function() {
            closeMobileMenu();
        });

        // Close mobile menu when clicking outside (on body)
        document.addEventListener('click', function(e) {
            if (!mobileMenu.contains(e.target) && !mobileMenuToggle.contains(e.target) && mobileMenu.classList.contains('open')) {
                closeMobileMenu();
            }
        });

        // Close mobile menu when clicking on menu items
        const mobileMenuLinks = mobileMenu.querySelectorAll('a');
        mobileMenuLinks.forEach(link => {
            link.addEventListener('click', function() {
                closeMobileMenu();
            });
        });

        // Close on escape key
        document.addEventListener('keydown', function(e) {
            if (e.key === 'Escape' && mobileMenu.classList.contains('open')) {
                closeMobileMenu();
            }
        });
    }

    function openMobileMenu() {
        mobileMenu.classList.add('open');
        overlay.classList.add('show');
        body.style.overflow = 'hidden';
    }

    function closeMobileMenu() {
        mobileMenu.classList.remove('open');
        overlay.classList.remove('show');
        body.style.overflow = '';
    }
});



// Keyboard Navigation for Main Menu
document.addEventListener('DOMContentLoaded', function() {
    const menuItems = document.querySelectorAll('.menu a');

    menuItems.forEach(item => {
        item.addEventListener('keydown', function(e) {
            const currentItem = this.parentElement;
            let nextItem;

            switch(e.key) {
                case 'ArrowRight':
                case 'ArrowDown':
                    e.preventDefault();
                    nextItem = currentItem.nextElementSibling;
                    if (nextItem) {
                        nextItem.querySelector('a').focus();
                    } else {
                        // Go to first item
                        currentItem.parentElement.firstElementChild.querySelector('a').focus();
                    }
                    break;

                case 'ArrowLeft':
                case 'ArrowUp':
                    e.preventDefault();
                    nextItem = currentItem.previousElementSibling;
                    if (nextItem) {
                        nextItem.querySelector('a').focus();
                    } else {
                        // Go to last item
                        currentItem.parentElement.lastElementChild.querySelector('a').focus();
                    }
                    break;

                case 'Home':
                    e.preventDefault();
                    currentItem.parentElement.firstElementChild.querySelector('a').focus();
                    break;

                case 'End':
                    e.preventDefault();
                    currentItem.parentElement.lastElementChild.querySelector('a').focus();
                    break;
            }
        });
    });
});

// Skip Link Focus
document.addEventListener('DOMContentLoaded', function() {
    const skipLink = document.querySelector('.skip-link a');

    if (skipLink) {
        skipLink.addEventListener('click', function(e) {
            const target = document.querySelector(this.getAttribute('href'));
            if (target) {
                target.focus();
                target.scrollIntoView({ behavior: 'smooth' });
            }
        });
    }
});

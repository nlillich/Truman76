// Mobile Menu Toggle
document.addEventListener('DOMContentLoaded', function() {
    const mobileMenuToggle = document.getElementById('header-left-menu');
    const mobileMenu = document.getElementById('mobile-header-left-nav');
    const body = document.body;

    if (mobileMenuToggle && mobileMenu) {
        mobileMenuToggle.addEventListener('click', function(e) {
            e.preventDefault();
            mobileMenu.classList.toggle('open');

            // Prevent body scroll when menu is open
            if (mobileMenu.classList.contains('open')) {
                body.style.overflow = 'hidden';
            } else {
                body.style.overflow = '';
            }
        });

        // Close mobile menu when clicking outside
        document.addEventListener('click', function(e) {
            if (!mobileMenu.contains(e.target) && !mobileMenuToggle.contains(e.target)) {
                mobileMenu.classList.remove('open');
                body.style.overflow = '';
            }
        });

        // Close mobile menu when clicking on menu items
        const mobileMenuLinks = mobileMenu.querySelectorAll('a');
        mobileMenuLinks.forEach(link => {
            link.addEventListener('click', function() {
                mobileMenu.classList.remove('open');
                body.style.overflow = '';
            });
        });
    }
});

// Search Toggle
document.addEventListener('DOMContentLoaded', function() {
    const searchToggle = document.getElementById('search-toggle');
    const searchContainer = document.getElementById('search-container');

    if (searchToggle && searchContainer) {
        searchToggle.addEventListener('click', function(e) {
            e.preventDefault();
            searchContainer.classList.toggle('displaynone');

            // Focus on search field when opened
            if (!searchContainer.classList.contains('displaynone')) {
                const searchField = searchContainer.querySelector('.search-field');
                if (searchField) {
                    setTimeout(() => searchField.focus(), 100);
                }
            }
        });

        // Close search when clicking outside
        document.addEventListener('click', function(e) {
            if (!searchContainer.contains(e.target) && !searchToggle.contains(e.target)) {
                searchContainer.classList.add('displaynone');
            }
        });

        // Close search on escape key
        document.addEventListener('keydown', function(e) {
            if (e.key === 'Escape' && !searchContainer.classList.contains('displaynone')) {
                searchContainer.classList.add('displaynone');
            }
        });
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

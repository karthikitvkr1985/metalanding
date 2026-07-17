(function () {
    const footerLinks = [
        { label: 'Portfolio Home', href: 'Index.html' },
        { label: 'InstaNext', href: 'Instanext.html' },
        { label: 'CyberShield 3D', href: 'cybershield.html' },
        { label: 'Contact', href: 'mailto:karthik.venkataramani@outlook.com' }
    ];

    function buildFooter() {
        if (document.querySelector('.universal-footer')) {
            return;
        }

        const footer = document.createElement('footer');
        footer.className = 'universal-footer';
        footer.innerHTML = `
            <div class="universal-footer__inner">
                <div class="universal-footer__brand">
                    <span class="universal-footer__eyebrow">Product Design Portfolio</span>
                    <strong>Karthik Venkataramani</strong>
                    <a href="mailto:karthik.venkataramani@outlook.com">karthik.venkataramani@outlook.com</a>
                </div>
                <nav class="universal-footer__nav" aria-label="Footer navigation">
                    ${footerLinks.map((link) => `<a href="${link.href}">${link.label}</a>`).join('')}
                </nav>
                <p class="universal-footer__copyright">© ${new Date().getFullYear()} · Designed with passion for Meta</p>
            </div>
        `;

        const mountPoint = document.getElementById('site-footer');
        if (mountPoint) {
            mountPoint.replaceWith(footer);
        } else {
            document.body.appendChild(footer);
        }
    }

    function injectStyles() {
        if (document.getElementById('universal-footer-styles')) {
            return;
        }

        const style = document.createElement('style');
        style.id = 'universal-footer-styles';
        style.textContent = `
            .universal-footer {
                position: relative;
                z-index: 10;
                margin-top: 64px;
                padding: 40px 24px;
                color: #f8fafc;
                background: linear-gradient(135deg, rgba(10, 10, 10, 0.96), rgba(24, 24, 27, 0.96));
                border-top: 1px solid rgba(148, 163, 184, 0.24);
                box-shadow: 0 -24px 80px rgba(0, 0, 0, 0.32);
                font-family: Inter, -apple-system, BlinkMacSystemFont, 'Segoe UI', Roboto, Helvetica, Arial, sans-serif;
            }

            .universal-footer__inner {
                width: min(1180px, 100%);
                margin: 0 auto;
                display: grid;
                grid-template-columns: minmax(220px, 1fr) auto;
                gap: 28px;
                align-items: center;
            }

            .universal-footer__brand {
                display: grid;
                gap: 6px;
            }

            .universal-footer__eyebrow {
                color: #a5b4fc;
                font-size: 0.76rem;
                font-weight: 700;
                letter-spacing: 0.12em;
                text-transform: uppercase;
            }

            .universal-footer__brand strong {
                font-size: clamp(1.35rem, 2vw, 1.85rem);
                letter-spacing: -0.03em;
            }

            .universal-footer a {
                color: #c4b5fd;
                text-decoration: none;
                transition: color 0.2s ease, transform 0.2s ease;
            }

            .universal-footer a:hover,
            .universal-footer a:focus-visible {
                color: #ffffff;
            }

            .universal-footer__nav {
                display: flex;
                flex-wrap: wrap;
                justify-content: flex-end;
                gap: 12px;
            }

            .universal-footer__nav a {
                padding: 10px 14px;
                border: 1px solid rgba(196, 181, 253, 0.2);
                border-radius: 999px;
                background: rgba(255, 255, 255, 0.04);
                color: #e5e7eb;
                font-size: 0.92rem;
                font-weight: 600;
            }

            .universal-footer__nav a:hover,
            .universal-footer__nav a:focus-visible {
                transform: translateY(-2px);
                border-color: rgba(196, 181, 253, 0.55);
                box-shadow: 0 10px 30px rgba(99, 102, 241, 0.2);
            }

            .universal-footer__copyright {
                grid-column: 1 / -1;
                color: #a1a1aa;
                font-size: 0.92rem;
            }

            @media (max-width: 760px) {
                .universal-footer__inner {
                    grid-template-columns: 1fr;
                    text-align: center;
                }

                .universal-footer__nav {
                    justify-content: center;
                }
            }
        `;
        document.head.appendChild(style);
    }

    function initFooter() {
        injectStyles();
        buildFooter();
    }

    if (document.readyState === 'loading') {
        document.addEventListener('DOMContentLoaded', initFooter);
    } else {
        initFooter();
    }
}());

<!DOCTYPE html>
<html lang="en">

<head>
    <meta charset="UTF-8">
    <title>Certificate Verification</title>
    <meta name="viewport" content="width=device-width, initial-scale=1, shrink-to-fit=no">

    <!-- PDF.js -->
    <script src="https://cdnjs.cloudflare.com/ajax/libs/pdf.js/2.16.105/pdf.min.js"></script>

    <!-- FontAwesome -->
    <link rel="stylesheet" href="https://cdnjs.cloudflare.com/ajax/libs/font-awesome/6.5.1/css/all.min.css">

    <!-- Custom styles for PDF viewer -->
    <link rel="stylesheet" href="{{ asset('css/verification-viewer.css') }}">
        <link rel="stylesheet" href="{{ asset('css/main.css') }}">
<link rel="stylesheet" href="{{ asset('css/mvc.css') }}">
<link rel="stylesheet" href="{{ asset('css/student-found.css') }}">
<link rel="stylesheet" href="{{ asset('css/style-bundle.css') }}">
<style>
    body {
        /* font-family: "Poppins", sans-serif;
        font-size: 1rem; */
    }
</style>
</head>

<body
    class="print-progress--fixed kt-page--loading-enabled kt-page--loading kt-page--fixed kt-header--fixed kt-header--minimize-topbar kt-header-mobile--fixed kt-quick-panel--right kt-demo-panel--right kt-offcanvas-panel--right kt-subheader--enabled kt-subheader--transparent kt-page--loading page-dashboard"
    style="background-color: #ffffff">
    <div class="kt-grid kt-grid--hor kt-grid--root" style="background-color: #f3f3f3;">
        <div class="kt-grid__item kt-grid__item--fluid kt-grid kt-grid--ver kt-page">
            <div class="kt-grid__item kt-grid__item--fluid kt-grid kt-grid--hor kt-wrapper" id="kt_wrapper">

                <!-- BEGIN: Header -->
                <header id="m_header" class="kt-grid__item m-header" m-minimize="minimize" m-minimize-offset="200"
                    m-minimize-mobile-offset="200">
                    <div class="kt-header__top">
                        <div class="kt-container">
                            <div class="kt-stack kt-stack--ver kt-stack--desktop">
                                <div class="kt-stack__item kt-stack__item--fluid kt-header-head" id="m_header_nav">
                                    <div id="m_header_topbar"
                                        class="kt-topbar kt-stack kt-stack--ver kt-stack--general">
                                        <div class="kt-stack__item kt-topbar__nav-wrapper">
                                            <ul class="kt-topbar__nav kt-nav kt-nav--inline">
                                            </ul>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </header>
                <!-- END: Header -->

                <div class="kt-grid__item kt-grid__item--fluid kt-grid kt-grid--ver kt-grid--stretch">
                    <div class="kt-container kt-body kt-grid kt-grid--ver" id="kt_body">
                        <div class="kt-grid__item kt-grid__item--fluid kt-grid kt-grid--hor">
                            <div id="svpPortlet" class="kt-portlet">
                                <div class="kt-portlet__body">

                                    <!-- Logos -->
                                    <div class="kt-header__brand-logo mb-4" style="display: flex; justify-content: space-between; align-items: center;">
                                        <img src="https://iosh-digital.com/assets/img/logo-default.png"
                                            alt="IOSH Training" class="kt-header__brand-logo-default"
                                            style="width: 200px; height: auto; margin-left: -13px;">
                                        <img src="https://iosh-digital.com/assets/img/Smart-Verify-Plus-Logo.png"
                                            alt="Smart Verify+" class="kt-header__brand-sublogo-default"
                                            style="width: 200px; height: auto; margin-right: 3px;">
                                    </div>

                                    <!-- Success message -->
                                    <div class="alert alert-success" role="alert"
                                        style="display: flex; align-items: center; color: #ffffff; background-color: #007A5A;;">
                                        <div class="alert-icon" style="margin-right: 10px;">
                                            <i aria-hidden="true" class="far fa-check-circle fa-lg"></i>
                                        </div>
                                        <div class="alert-text" style="font-size: 14px; margin-left: 10px;">
                                            This document is valid and was issued by
                                            {{ $certificate->issuer ?? 'IOSH (Institution of Occupational Safety and Health)' }}
                                            to
                                            {{ $certificate->candidate_name ?? 'Candidate Name' }}
                                            on
                                            {{ \Carbon\Carbon::parse($certificate->issue_date ?? now())->format('d F Y') }}
                                        </div>
                                    </div>

                                    <!-- PDF Viewer Container -->
                                    <div class="main-container">
                                        <div class="pdf-toolbar">
                                            <div class="pdf-toolbar-left">
                                                <button
                                                    style="background-color: transparent; border: none;color:#969696"><i
                                                        class="fa fa-columns fa-xl" aria-hidden="true"></i></button>
                                                <div class="vertical-line"></div>

                                                <div class="dropdown">
                                                    <!-- Custom Dropdown Button -->
                                                    <button class="dropbtn pdf-options-btn"
                                                        style="background-color: transparent; border: none;">
                                                        <svg width="22" height="22" viewBox="0 0 22 26"
                                                            fill="none" xmlns="http://www.w3.org/2000/svg">
                                                            <path
                                                                d="M11.0332 13.2227C9.78417 13.2228 8.7793 14.2428 8.7793 15.4922C8.77931 16.7415 9.78417 17.7615 11.0332 17.7617C12.2824 17.7617 13.2881 16.7417 13.2881 15.4922C13.2881 14.2427 12.2824 13.2227 11.0332 13.2227ZM10.623 18.542L10.249 18.4443C9.97752 18.3733 9.71704 18.2636 9.47559 18.1191L9.13965 17.918L8.86426 18.1963L8.10449 18.9619L7.56836 18.4199L8.33398 17.6484L8.60449 17.375L8.40918 17.043C8.26578 16.799 8.15757 16.5355 8.08691 16.2607L7.99023 15.8848H6.5V15.1152H7.99023L8.08691 14.7393C8.15757 14.4645 8.26578 14.201 8.40918 13.957L8.60449 13.625L8.33398 13.3516L7.56836 12.5791L8.10449 12.0371L8.86426 12.8037L9.13965 13.082L9.47559 12.8809C9.71704 12.7364 9.97753 12.6267 10.249 12.5557L10.623 12.458V11H11.377V12.458L11.751 12.5557C12.0225 12.6267 12.283 12.7364 12.5244 12.8809L12.8604 13.082L13.1357 12.8037L13.8945 12.0371L14.4307 12.5791L13.666 13.3516L13.3955 13.625L13.5908 13.957C13.7342 14.201 13.8424 14.4645 13.9131 14.7393L14.0098 15.1152H15.5V15.8848H14.0098L13.9131 16.2607C13.8424 16.5355 13.7342 16.799 13.5908 17.043L13.3955 17.375L13.666 17.6484L14.4307 18.4199L13.8945 18.9619L13.1357 18.1963L12.8604 17.918L12.5244 18.1191C12.283 18.2636 12.0225 18.3733 11.751 18.4443L11.377 18.542V20H10.623V18.542Z"
                                                                fill="#485056" stroke="#969696"></path>
                                                            <path
                                                                d="M1 24V2C1 1.44772 1.44771 1 2 1H13.6185C13.8871 1 14.1444 1.10804 14.3324 1.29978L20.7139 7.80625C20.8973 7.9932 21 8.24461 21 8.50647V24C21 24.5523 20.5523 25 20 25H2C1.44772 25 1 24.5523 1 24Z"
                                                                stroke="#969696" stroke-width="2"></path>
                                                        </svg>
                                                    </button>

                                                    <!-- Custom Dropdown Content -->
                                                    <div id="pdf-options-dropdown" class="dropdown-content">
                                                        <div class="dropdown-section" id="pdf-options">
                                                            <label>Page Transition</label>
                                                            <div class="dropdown-item" data-value="continuous">
                                                                <i class="fa fa-arrow-right"></i> Continuous Page
                                                            </div>
                                                            <div class="dropdown-item" data-value="page-by-page">
                                                                <i class="fa fa-bars"></i> Page by Page
                                                            </div>
                                                        </div>

                                                        <div class="dropdown-section">
                                                            <label>Page Orientation</label>
                                                            <div class="dropdown-item" data-value="rotate-clockwise">
                                                                <i class="fa fa-sync-alt"></i> Rotate Clockwise
                                                            </div>
                                                            <div class="dropdown-item"
                                                                data-value="rotate-counterclockwise">
                                                                <i class="fa fa-sync-alt"></i> Rotate Counterclockwise
                                                            </div>
                                                        </div>

                                                        <div class="dropdown-section">
                                                            <label>Page Layout</label>
                                                            <div class="dropdown-item" data-value="single-page">
                                                                <i class="fa fa-file"></i> Single Page
                                                            </div>
                                                            <div class="dropdown-item" data-value="double-page">
                                                                <i class="fa fa-columns"></i> Double Page
                                                            </div>
                                                            <div class="dropdown-item" data-value="cover-facing-page">
                                                                <i class="fa fa-book"></i> Cover Facing Page
                                                            </div>
                                                        </div>
                                                    </div>
                                                </div>

                                                <select id="zoom-size" style="">
                                                    <option value="fit-width">Fit to Width</option>
                                                    <option value="fit-page">Fit to Page</option>
                                                    <option value="0.1">10%</option>
                                                    <option value="0.25">25%</option>
                                                    <option value="0.5">50%</option>
                                                    <option value="0.75">75%</option>
                                                    <option value="1">100%</option>
                                                    <option value="1.25">125%</option>
                                                    <option value="1.5">150%</option>
                                                    <option value="2">200%</option>
                                                    <option value="4">400%</option>
                                                    <option value="8">800%</option>
                                                    <option value="16">1600%</option>
                                                    <option value="64">6400%</option>
                                                </select>

                                                <button id="zoom-in" class="circle-btn"><i
                                                        class="fa-solid fa-plus fa-xs"></i></button>
                                                <button id="zoom-out" class="circle-btn"><i
                                                        class="fa-solid fa-minus fa-xs"></i></button>
                                                <div class="vertical-line"></div>
                                                <button id="hand-icon-btn"
                                                    style="background-color: transparent; border: none;color:#969696">


                                                    <svg width="30px" height="30px" viewBox="0 0 24 24"
                                                        xmlns="http://www.w3.org/2000/svg">
                                                        <path fill-rule="evenodd" clip-rule="evenodd"
                                                            d="M13.5001 3.75C13.9143 3.75 14.2501 4.08579 14.2501 4.5V7.5V12.75H15.7501V7.5C15.7501 7.08579 16.0858 6.75 16.5001 6.75C16.9143 6.75 17.2501 7.08579 17.2501 7.5V15C17.2501 17.8995 14.8996 20.25 12.0001 20.25V21.75C15.728 21.75 18.7501 18.7279 18.7501 15V7.5C18.7501 6.25736 17.7427 5.25 16.5001 5.25C16.2371 5.25 15.9846 5.29512 15.7501 5.37803V4.5C15.7501 3.25736 14.7427 2.25 13.5001 2.25C12.4625 2.25 11.5889 2.95235 11.3289 3.90757C11.0724 3.80589 10.7927 3.75 10.5001 3.75C9.25742 3.75 8.25006 4.75736 8.25006 6V12.5344L7.77377 11.5689L7.77221 11.5657C7.21726 10.4539 5.86607 10.0024 4.75422 10.5574C3.65214 11.1075 3.1989 12.4399 3.7315 13.546L5.03741 16.7808L5.06205 16.8354C6.16787 19.047 7.45919 20.2994 8.73651 20.9857C10.0096 21.6696 11.194 21.75 12.0001 21.75V20.25C11.3061 20.25 10.4069 20.1803 9.44641 19.6643C8.49439 19.1528 7.40758 18.1618 6.41695 16.191L5.11239 12.9597L5.08798 12.9055C4.903 12.5349 5.05349 12.0845 5.4241 11.8995C5.79428 11.7147 6.24405 11.8646 6.42944 12.2343L8.32743 16.0818L9.75004 15.75V14.25H9.75006V6C9.75006 5.58579 10.0858 5.25 10.5001 5.25C10.9143 5.25 11.2501 5.58579 11.2501 6V12.75H12.7501V6V4.5C12.7501 4.08579 13.0858 3.75 13.5001 3.75Z"
                                                            fill="#969696"></path>
                                                    </svg>


                                                </button>


                                            </div>
                                            <div class="pdf-toolbar-right">


                                                <div class="dropdown">
                                                    <!-- Gear Icon Button to open dropdown -->
                                                    <button onclick="myFunction()" class="dropbtn"
                                                        style="background-color: transparent; border: none;color:#969696">
                                                        <i class="fa fa-cog fa-md"></i>
                                                    </button>

                                                    <!-- Dropdown Menu for Full Screen -->
                                                    <div id="myDropdown" class="dropdown-content">
                                                        <a href="#" id="fullscreen-btn">
                                                            <i class="fa fa-expand fa-sm"></i> Full Screen
                                                        </a>

                                                    </div>
                                                </div>

                                            </div>
                                        </div>

                                        <!-- PDF Container -->
                                        <div id="pdf-container" class="pdf-container"
                                            style="overflow: auto; max-height: 100vh;"><canvas height="1262"
                                                width="892"></canvas></div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>


            </div>

        </div>

    </div>
    <!-- begin::Footer -->
    <div class="kt-footer kt-footer--extended kt-grid__item footer-fullwidth-bg" style="margin-bottom: 0;">
        <div class="kt-footer__bottom"
            style="background: #181824; color: #afabab; padding: 10px 0 0 0; box-shadow: 0 0 0 100vmax #002147; clip-path: inset(0 -100vmax); margin-bottom: 0;">
            <div class="kt-footer__wrapper"
                style="display: flex; flex-direction: row; align-items: center; justify-content: space-between; max-width: 1450px; margin: 0 auto; width: 100%; min-height: 28px;">
                <div class="kt-footer__copyright"
                    style="color: #afabab; font-size: 14px; flex: 1; text-align: left; display: flex; align-items: center; margin-left: 30px; margin-bottom: 10px;">
                    {{ date('Y') }} &copy; {{ config('app.name', 'DSSL') }}
                </div>
                <div class="kt-footer__menu mb-5"
                    style="display: flex; flex: 1; justify-content: flex-end; align-items: center; margin-right: 40px; margin-top: 14px;">
                    <a href="/Pages/Privacy" class="btn-md footer-link" style="color: #afabab !important;" onmouseover="this.style.color='#007bff'" onmouseout="this.style.color='#afabab'">Privacy</a>
                    <a href="/Pages/Faq" class="btn-md footer-link" style="color: #afabab !important;" onmouseover="this.style.color='#007bff'" onmouseout="this.style.color='#afabab'">FAQ</a>
                    <a href="/Pages/Cookies" class="btn-md footer-link" style="color: #afabab !important;" onmouseover="this.style.color='#007bff'" onmouseout="this.style.color='#afabab'">Cookies</a>
                    <a href="/Pages/Terms" class="btn-md footer-link" style="color: #afabab !important;" onmouseover="this.style.color='#007bff'" onmouseout="this.style.color='#afabab'">Terms</a>
                    <a href="/Pages/Support" class="btn-md footer-link" style="color: #afabab !important;" onmouseover="this.style.color='#007bff'" onmouseout="this.style.color='#afabab'">Support</a>
                </div>
            </div>
        </div>
    </div>
    <!-- Footer styles moved to custom CSS file -->
    <!-- end::Footer -->


    {{-- PDF VIEWER SCRIPT --}}
    <script>
    document.addEventListener('DOMContentLoaded', function() {
        pdfjsLib.GlobalWorkerOptions.workerSrc =
            "https://cdnjs.cloudflare.com/ajax/libs/pdf.js/2.16.105/pdf.worker.min.js";

        const documentURL = "{{ route('certificate.download', $certificate->id) }}";
        const container = document.getElementById('pdf-container');

        let scale = 1.5;
        let currentPage = 1;
        let pageTransitionMode = 'single'; // 'single', 'continuous', 'double', 'cover-facing'
        let pdfDoc = null;
        let rotation = 0; // 0, 90, 180, 270

        // Render a single page
        function renderPage(pageNum) {
            if (!pdfDoc) {
                pdfjsLib.getDocument(documentURL).promise.then(pdf => {
                    pdfDoc = pdf;
                    renderPage(pageNum);
                });
                return;
            }
            container.innerHTML = '';
            if (pageTransitionMode === 'double') {
                // Double Page: show two pages side by side
                let leftPage = pageNum;
                let rightPage = pageNum + 1 <= pdfDoc.numPages ? pageNum + 1 : null;
                pdfDoc.getPage(leftPage).then(page => {
                    const viewport = page.getViewport({
                        scale,
                        rotation
                    });
                    const canvas = document.createElement('canvas');
                    const ctx = canvas.getContext('2d');
                    canvas.height = viewport.height;
                    canvas.width = viewport.width;
                    page.render({
                        canvasContext: ctx,
                        viewport
                    });
                    container.appendChild(canvas);
                    if (rightPage) {
                        pdfDoc.getPage(rightPage).then(page2 => {
                            const viewport2 = page2.getViewport({
                                scale,
                                rotation
                            });
                            const canvas2 = document.createElement('canvas');
                            const ctx2 = canvas2.getContext('2d');
                            canvas2.height = viewport2.height;
                            canvas2.width = viewport2.width;
                            page2.render({
                                canvasContext: ctx2,
                                viewport: viewport2
                            });
                            container.appendChild(canvas2);
                        });
                    }
                });
            } else if (pageTransitionMode === 'cover-facing') {
                // Cover Facing Page: first page alone, then double pages
                if (pageNum === 1) {
                    pdfDoc.getPage(1).then(page => {
                        const viewport = page.getViewport({
                            scale,
                            rotation
                        });
                        const canvas = document.createElement('canvas');
                        const ctx = canvas.getContext('2d');
                        canvas.height = viewport.height;
                        canvas.width = viewport.width;
                        page.render({
                            canvasContext: ctx,
                            viewport
                        });
                        container.appendChild(canvas);
                    });
                } else {
                    // Show two pages: (pageNum, pageNum+1)
                    let leftPage = pageNum;
                    let rightPage = pageNum + 1 <= pdfDoc.numPages ? pageNum + 1 : null;
                    pdfDoc.getPage(leftPage).then(page => {
                        const viewport = page.getViewport({
                            scale,
                            rotation
                        });
                        const canvas = document.createElement('canvas');
                        const ctx = canvas.getContext('2d');
                        canvas.height = viewport.height;
                        canvas.width = viewport.width;
                        page.render({
                            canvasContext: ctx,
                            viewport
                        });
                        container.appendChild(canvas);
                        if (rightPage) {
                            pdfDoc.getPage(rightPage).then(page2 => {
                                const viewport2 = page2.getViewport({
                                    scale,
                                    rotation
                                });
                                const canvas2 = document.createElement('canvas');
                                const ctx2 = canvas2.getContext('2d');
                                canvas2.height = viewport2.height;
                                canvas2.width = viewport2.width;
                                page2.render({
                                    canvasContext: ctx2,
                                    viewport: viewport2
                                });
                                container.appendChild(canvas2);
                            });
                        }
                    });
                }
            } else {
                // Single page (default)
                pdfDoc.getPage(pageNum).then(page => {
                    const viewport = page.getViewport({
                        scale,
                        rotation
                    });
                    const canvas = document.createElement('canvas');
                    const ctx = canvas.getContext('2d');
                    canvas.height = viewport.height;
                    canvas.width = viewport.width;
                    page.render({
                        canvasContext: ctx,
                        viewport
                    });
                    container.appendChild(canvas);
                });
            }
        }

        // Render all pages (continuous mode)
        function renderAllPages() {
            if (!pdfDoc) {
                pdfjsLib.getDocument(documentURL).promise.then(pdf => {
                    pdfDoc = pdf;
                    renderAllPages();
                });
                return;
            }
            container.innerHTML = '';
            let renderPromises = [];
            for (let i = 1; i <= pdfDoc.numPages; i++) {
                renderPromises.push(
                    pdfDoc.getPage(i).then(page => {
                        const viewport = page.getViewport({
                            scale,
                            rotation
                        });
                        const canvas = document.createElement('canvas');
                        const ctx = canvas.getContext('2d');
                        canvas.height = viewport.height;
                        canvas.width = viewport.width;
                        page.render({
                            canvasContext: ctx,
                            viewport
                        });
                        container.appendChild(canvas);
                    })
                );
            }
            Promise.all(renderPromises);
        }

        // Initial load
        pdfjsLib.getDocument(documentURL).promise.then(pdf => {
            pdfDoc = pdf;
            renderPage(currentPage);
        });

        document.getElementById('zoom-in').onclick = () => {
            scale += 0.2;
            if (pageTransitionMode === 'continuous') {
                renderAllPages();
            } else {
                renderPage(currentPage);
            }
        };

        document.getElementById('zoom-out').onclick = () => {
            scale -= 0.2;
            if (pageTransitionMode === 'continuous') {
                renderAllPages();
            } else {
                renderPage(currentPage);
            }
        };

        document.getElementById('fullscreen-btn').onclick = () => {
            container.requestFullscreen(); // Trigger fullscreen for PDF container
        };

        // PDF Options: Page Transition (Continuous/Page-by-Page), Orientation, and Layout
        document.querySelectorAll('#pdf-options-dropdown .dropdown-item').forEach(
            function(item) {
                item.addEventListener('click', function() {
                    const value = this.getAttribute('data-value');
                    console.log('Dropdown item clicked:', value); // Debug
                    if (value === 'continuous') {
                        pageTransitionMode = 'continuous';
                        renderAllPages();
                    } else if (value === 'page-by-page' || value === 'single-page') {
                        pageTransitionMode = 'single';
                        renderPage(currentPage);
                    } else if (value === 'double-page') {
                        pageTransitionMode = 'double';
                        // Always use odd page as left page
                        if (currentPage % 2 === 0) currentPage--;
                        renderPage(currentPage);
                    } else if (value === 'cover-facing-page') {
                        pageTransitionMode = 'cover-facing';
                        // Always start at 1 for cover
                        if (currentPage !== 1 && currentPage % 2 === 0) currentPage--;
                        renderPage(currentPage);
                    } else if (value === 'rotate-clockwise') {
                        rotation = (rotation + 90) % 360;
                        if (pageTransitionMode === 'continuous') {
                            renderAllPages();
                        } else {
                            renderPage(currentPage);
                        }
                    } else if (value === 'rotate-counterclockwise') {
                        rotation = (rotation - 90 + 360) % 360;
                        if (pageTransitionMode === 'continuous') {
                            renderAllPages();
                        } else {
                            renderPage(currentPage);
                        }
                    }

                    // Close the dropdown after selection
                    document.getElementById('pdf-options-dropdown').classList.remove('show');
                });
            });

        // Fullscreen logic for both icon and menu
        const fullscreenBtn = document.getElementById('fullscreen-btn');
        const gearBtn = document.querySelector('.fa-cog').parentElement;

        function openFullscreen() {
            container.requestFullscreen();
        }
        fullscreenBtn.onclick = openFullscreen;
        gearBtn.onclick = function(e) {
            // Only trigger fullscreen if not opening dropdown
            if (e.target.classList.contains('fa-cog')) {
                openFullscreen();
            } else {
                myFunction(); // open dropdown
            }
        };

        // Dropdown functionality (scoped for each dropdown)
        function myFunction() {
            document.getElementById("myDropdown").classList.toggle("show");
        }

        // PDF Options Dropdown (scoped)
        const pdfOptionsBtn = document.querySelector('.pdf-options-btn');
        const pdfOptionsDropdown = document.getElementById('pdf-options-dropdown');
        pdfOptionsBtn.addEventListener('click', function(e) {
            e.stopPropagation();
            pdfOptionsDropdown.classList.toggle('show');
            // Hide other dropdowns
            document.getElementById("myDropdown").classList.remove("show");
        });

        // Gear/settings dropdown (scoped)
        const gearDropdownBtn = document.querySelector('.fa-cog').parentElement;
        const gearDropdown = document.getElementById('myDropdown');
        gearDropdownBtn.addEventListener('click', function(e) {
            // Only open dropdown if not triggering fullscreen
            if (!e.target.classList.contains('fa-cog')) {
                e.stopPropagation();
                gearDropdown.classList.toggle('show');
                // Hide other dropdowns
                pdfOptionsDropdown.classList.remove('show');
            }
        });

        // Close dropdowns if clicking outside
        window.addEventListener('click', function(event) {
            if (!event.target.closest('.dropdown')) {
                pdfOptionsDropdown.classList.remove('show');
                gearDropdown.classList.remove('show');
            }
        });

        // Hand tool functionality
        const handIconButton = document.getElementById('hand-icon-btn');
        let isDragging = false;
        let startX;
        let startY;
        let scrollLeft;
        let scrollTop;

        handIconButton.addEventListener('click', function() {
            container.classList.toggle('grab');
        });

        function startDrag(e) {
            isDragging = true;
            container.classList.add('grabbing');
            startX = e.pageX - container.offsetLeft;
            startY = e.pageY - container.offsetTop;
            scrollLeft = container.scrollLeft;
            scrollTop = container.scrollTop;
            e.preventDefault();
        }

        function drag(e) {
            if (!isDragging) return;
            e.preventDefault();
            const x = e.pageX - container.offsetLeft;
            const y = e.pageY - container.offsetTop;
            const walkX = (x - startX) * 2;
            const walkY = (y - startY) * 2;
            container.scrollLeft = scrollLeft - walkX;
            container.scrollTop = scrollTop - walkY;
        }

        function stopDrag() {
            isDragging = false;
            container.classList.remove('grabbing');
        }

        container.addEventListener('mousedown', function(e) {
            if (container.classList.contains('grab')) {
                startDrag(e);
            }
        });

        container.addEventListener('mousemove', drag);
        container.addEventListener('mouseup', stopDrag);
        container.addEventListener('mouseleave', stopDrag);

        // Zoom size dropdown functionality
        document.getElementById('zoom-size').addEventListener('change', function() {
            const zoomValue = this.value;
            if (zoomValue === 'fit-width') {
                scale = container.offsetWidth / 800;
            } else if (zoomValue === 'fit-page') {
                scale = Math.min(container.offsetWidth / 800, container.offsetHeight / 1000);
            } else {
                scale = parseFloat(zoomValue);
            }
            if (pageTransitionMode === 'continuous') {
                renderAllPages();
            } else {
                renderPage(currentPage);
            }
        });
    });
    </script>



</body>

</html>

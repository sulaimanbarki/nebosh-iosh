<html lang="en">

<head>
    <style type="text/css">
        .swal-icon--error {
            border-color: #f27474;
            -webkit-animation: animateErrorIcon .5s;
            animation: animateErrorIcon .5s
        }

        .swal-icon--error__x-mark {
            position: relative;
            display: block;
            -webkit-animation: animateXMark .5s;
            animation: animateXMark .5s
        }

        .swal-icon--error__line {
            position: absolute;
            height: 5px;
            width: 47px;
            background-color: #f27474;
            display: block;
            top: 37px;
            border-radius: 2px
        }

        .swal-icon--error__line--left {
            -webkit-transform: rotate(45deg);
            transform: rotate(45deg);
            left: 17px
        }

        .swal-icon--error__line--right {
            -webkit-transform: rotate(-45deg);
            transform: rotate(-45deg);
            right: 16px
        }

        @-webkit-keyframes animateErrorIcon {
            0% {
                -webkit-transform: rotateX(100deg);
                transform: rotateX(100deg);
                opacity: 0
            }

            to {
                -webkit-transform: rotateX(0deg);
                transform: rotateX(0deg);
                opacity: 1
            }
        }

        @keyframes animateErrorIcon {
            0% {
                -webkit-transform: rotateX(100deg);
                transform: rotateX(100deg);
                opacity: 0
            }

            to {
                -webkit-transform: rotateX(0deg);
                transform: rotateX(0deg);
                opacity: 1
            }
        }

        @-webkit-keyframes animateXMark {
            0% {
                -webkit-transform: scale(.4);
                transform: scale(.4);
                margin-top: 26px;
                opacity: 0
            }

            50% {
                -webkit-transform: scale(.4);
                transform: scale(.4);
                margin-top: 26px;
                opacity: 0
            }

            80% {
                -webkit-transform: scale(1.15);
                transform: scale(1.15);
                margin-top: -6px
            }

            to {
                -webkit-transform: scale(1);
                transform: scale(1);
                margin-top: 0;
                opacity: 1
            }
        }

        @keyframes animateXMark {
            0% {
                -webkit-transform: scale(.4);
                transform: scale(.4);
                margin-top: 26px;
                opacity: 0
            }

            50% {
                -webkit-transform: scale(.4);
                transform: scale(.4);
                margin-top: 26px;
                opacity: 0
            }

            80% {
                -webkit-transform: scale(1.15);
                transform: scale(1.15);
                margin-top: -6px
            }

            to {
                -webkit-transform: scale(1);
                transform: scale(1);
                margin-top: 0;
                opacity: 1
            }
        }

        .swal-icon--warning {
            border-color: #f8bb86;
            -webkit-animation: pulseWarning .75s infinite alternate;
            animation: pulseWarning .75s infinite alternate
        }

        .swal-icon--warning__body {
            width: 5px;
            height: 47px;
            top: 10px;
            border-radius: 2px;
            margin-left: -2px
        }

        .swal-icon--warning__body,
        .swal-icon--warning__dot {
            position: absolute;
            left: 50%;
            background-color: #f8bb86
        }

        .swal-icon--warning__dot {
            width: 7px;
            height: 7px;
            border-radius: 50%;
            margin-left: -4px;
            bottom: -11px
        }

        @-webkit-keyframes pulseWarning {
            0% {
                border-color: #f8d486
            }

            to {
                border-color: #f8bb86
            }
        }

        @keyframes pulseWarning {
            0% {
                border-color: #f8d486
            }

            to {
                border-color: #f8bb86
            }
        }

        .swal-icon--success {
            border-color: #a5dc86
        }

        .swal-icon--success:after,
        .swal-icon--success:before {
            content: "";
            border-radius: 50%;
            position: absolute;
            width: 60px;
            height: 120px;
            background: #fff;
            -webkit-transform: rotate(45deg);
            transform: rotate(45deg)
        }

        .swal-icon--success:before {
            border-radius: 120px 0 0 120px;
            top: -7px;
            left: -33px;
            -webkit-transform: rotate(-45deg);
            transform: rotate(-45deg);
            -webkit-transform-origin: 60px 60px;
            transform-origin: 60px 60px
        }

        .swal-icon--success:after {
            border-radius: 0 120px 120px 0;
            top: -11px;
            left: 30px;
            -webkit-transform: rotate(-45deg);
            transform: rotate(-45deg);
            -webkit-transform-origin: 0 60px;
            transform-origin: 0 60px;
            -webkit-animation: rotatePlaceholder 4.25s ease-in;
            animation: rotatePlaceholder 4.25s ease-in
        }

        .swal-icon--success__ring {
            width: 80px;
            height: 80px;
            border: 4px solid hsla(98, 55%, 69%, .2);
            border-radius: 50%;
            box-sizing: content-box;
            position: absolute;
            left: -4px;
            top: -4px;
            z-index: 2
        }

        .swal-icon--success__hide-corners {
            width: 5px;
            height: 90px;
            background-color: #fff;
            padding: 1px;
            position: absolute;
            left: 28px;
            top: 8px;
            z-index: 1;
            -webkit-transform: rotate(-45deg);
            transform: rotate(-45deg)
        }

        .swal-icon--success__line {
            height: 5px;
            background-color: #a5dc86;
            display: block;
            border-radius: 2px;
            position: absolute;
            z-index: 2
        }

        .swal-icon--success__line--tip {
            width: 25px;
            left: 14px;
            top: 46px;
            -webkit-transform: rotate(45deg);
            transform: rotate(45deg);
            -webkit-animation: animateSuccessTip .75s;
            animation: animateSuccessTip .75s
        }

        .swal-icon--success__line--long {
            width: 47px;
            right: 8px;
            top: 38px;
            -webkit-transform: rotate(-45deg);
            transform: rotate(-45deg);
            -webkit-animation: animateSuccessLong .75s;
            animation: animateSuccessLong .75s
        }

        @-webkit-keyframes rotatePlaceholder {
            0% {
                -webkit-transform: rotate(-45deg);
                transform: rotate(-45deg)
            }

            5% {
                -webkit-transform: rotate(-45deg);
                transform: rotate(-45deg)
            }

            12% {
                -webkit-transform: rotate(-405deg);
                transform: rotate(-405deg)
            }

            to {
                -webkit-transform: rotate(-405deg);
                transform: rotate(-405deg)
            }
        }

        @keyframes rotatePlaceholder {
            0% {
                -webkit-transform: rotate(-45deg);
                transform: rotate(-45deg)
            }

            5% {
                -webkit-transform: rotate(-45deg);
                transform: rotate(-45deg)
            }

            12% {
                -webkit-transform: rotate(-405deg);
                transform: rotate(-405deg)
            }

            to {
                -webkit-transform: rotate(-405deg);
                transform: rotate(-405deg)
            }
        }

        @-webkit-keyframes animateSuccessTip {
            0% {
                width: 0;
                left: 1px;
                top: 19px
            }

            54% {
                width: 0;
                left: 1px;
                top: 19px
            }

            70% {
                width: 50px;
                left: -8px;
                top: 37px
            }

            84% {
                width: 17px;
                left: 21px;
                top: 48px
            }

            to {
                width: 25px;
                left: 14px;
                top: 45px
            }
        }

        @keyframes animateSuccessTip {
            0% {
                width: 0;
                left: 1px;
                top: 19px
            }

            54% {
                width: 0;
                left: 1px;
                top: 19px
            }

            70% {
                width: 50px;
                left: -8px;
                top: 37px
            }

            84% {
                width: 17px;
                left: 21px;
                top: 48px
            }

            to {
                width: 25px;
                left: 14px;
                top: 45px
            }
        }

        @-webkit-keyframes animateSuccessLong {
            0% {
                width: 0;
                right: 46px;
                top: 54px
            }

            65% {
                width: 0;
                right: 46px;
                top: 54px
            }

            84% {
                width: 55px;
                right: 0;
                top: 35px
            }

            to {
                width: 47px;
                right: 8px;
                top: 38px
            }
        }

        @keyframes animateSuccessLong {
            0% {
                width: 0;
                right: 46px;
                top: 54px
            }

            65% {
                width: 0;
                right: 46px;
                top: 54px
            }

            84% {
                width: 55px;
                right: 0;
                top: 35px
            }

            to {
                width: 47px;
                right: 8px;
                top: 38px
            }
        }

        .swal-icon--info {
            border-color: #c9dae1
        }

        .swal-icon--info:before {
            width: 5px;
            height: 29px;
            bottom: 17px;
            border-radius: 2px;
            margin-left: -2px
        }

        .swal-icon--info:after,
        .swal-icon--info:before {
            content: "";
            position: absolute;
            left: 50%;
            background-color: #c9dae1
        }

        .swal-icon--info:after {
            width: 7px;
            height: 7px;
            border-radius: 50%;
            margin-left: -3px;
            top: 19px
        }

        .swal-icon {
            width: 80px;
            height: 80px;
            border-width: 4px;
            border-style: solid;
            border-radius: 50%;
            padding: 0;
            position: relative;
            box-sizing: content-box;
            margin: 20px auto
        }

        .swal-icon:first-child {
            margin-top: 32px
        }

        .swal-icon--custom {
            width: auto;
            height: auto;
            max-width: 100%;
            border: none;
            border-radius: 0
        }

        .swal-icon img {
            max-width: 100%;
            max-height: 100%
        }

        .swal-title {
            color: rgba(0, 0, 0, .65);
            font-weight: 600;
            text-transform: none;
            position: relative;
            display: block;
            padding: 13px 16px;
            font-size: 27px;
            line-height: normal;
            text-align: center;
            margin-bottom: 0
        }

        .swal-title:first-child {
            margin-top: 26px
        }

        .swal-title:not(:first-child) {
            padding-bottom: 0
        }

        .swal-title:not(:last-child) {
            margin-bottom: 13px
        }

        .swal-text {
            font-size: 16px;
            position: relative;
            float: none;
            line-height: normal;
            vertical-align: top;
            text-align: left;
            display: inline-block;
            margin: 0;
            padding: 0 10px;
            font-weight: 400;
            color: rgba(0, 0, 0, .64);
            max-width: calc(100% - 20px);
            overflow-wrap: break-word;
            box-sizing: border-box
        }

        .swal-text:first-child {
            margin-top: 45px
        }

        .swal-text:last-child {
            margin-bottom: 45px
        }

        .swal-footer {
            text-align: right;
            padding-top: 13px;
            margin-top: 13px;
            padding: 13px 16px;
            border-radius: inherit;
            border-top-left-radius: 0;
            border-top-right-radius: 0
        }

        .swal-button-container {
            margin: 5px;
            display: inline-block;
            position: relative
        }

        .swal-button {
            background-color: #7cd1f9;
            color: #fff;
            border: none;
            box-shadow: none;
            border-radius: 5px;
            font-weight: 600;
            font-size: 14px;
            padding: 10px 24px;
            margin: 0;
            cursor: pointer
        }

        .swal-button:not([disabled]):hover {
            background-color: #78cbf2
        }

        .swal-button:active {
            background-color: #70bce0
        }

        .swal-button:focus {
            outline: none;
            box-shadow: 0 0 0 1px #fff, 0 0 0 3px rgba(43, 114, 165, .29)
        }

        .swal-button[disabled] {
            opacity: .5;
            cursor: default
        }

        .swal-button::-moz-focus-inner {
            border: 0
        }

        .swal-button--cancel {
            color: #555;
            background-color: #efefef
        }

        .swal-button--cancel:not([disabled]):hover {
            background-color: #e8e8e8
        }

        .swal-button--cancel:active {
            background-color: #d7d7d7
        }

        .swal-button--cancel:focus {
            box-shadow: 0 0 0 1px #fff, 0 0 0 3px rgba(116, 136, 150, .29)
        }

        .swal-button--danger {
            background-color: #e64942
        }

        .swal-button--danger:not([disabled]):hover {
            background-color: #df4740
        }

        .swal-button--danger:active {
            background-color: #cf423b
        }

        .swal-button--danger:focus {
            box-shadow: 0 0 0 1px #fff, 0 0 0 3px rgba(165, 43, 43, .29)
        }

        .swal-content {
            padding: 0 20px;
            margin-top: 20px;
            font-size: medium
        }

        .swal-content:last-child {
            margin-bottom: 20px
        }

        .swal-content__input,
        .swal-content__textarea {
            -webkit-appearance: none;
            background-color: #fff;
            border: none;
            font-size: 14px;
            display: block;
            box-sizing: border-box;
            width: 100%;
            border: 1px solid rgba(0, 0, 0, .14);
            padding: 10px 13px;
            border-radius: 2px;
            transition: border-color .2s
        }

        .swal-content__input:focus,
        .swal-content__textarea:focus {
            outline: none;
            border-color: #6db8ff
        }

        .swal-content__textarea {
            resize: vertical
        }

        .swal-button--loading {
            color: transparent
        }

        .swal-button--loading~.swal-button__loader {
            opacity: 1
        }

        .swal-button__loader {
            position: absolute;
            height: auto;
            width: 43px;
            z-index: 2;
            left: 50%;
            top: 50%;
            -webkit-transform: translateX(-50%) translateY(-50%);
            transform: translateX(-50%) translateY(-50%);
            text-align: center;
            pointer-events: none;
            opacity: 0
        }

        .swal-button__loader div {
            display: inline-block;
            float: none;
            vertical-align: baseline;
            width: 9px;
            height: 9px;
            padding: 0;
            border: none;
            margin: 2px;
            opacity: .4;
            border-radius: 7px;
            background-color: hsla(0, 0%, 100%, .9);
            transition: background .2s;
            -webkit-animation: swal-loading-anim 1s infinite;
            animation: swal-loading-anim 1s infinite
        }

        .swal-button__loader div:nth-child(3n+2) {
            -webkit-animation-delay: .15s;
            animation-delay: .15s
        }

        .swal-button__loader div:nth-child(3n+3) {
            -webkit-animation-delay: .3s;
            animation-delay: .3s
        }

        @-webkit-keyframes swal-loading-anim {
            0% {
                opacity: .4
            }

            20% {
                opacity: .4
            }

            50% {
                opacity: 1
            }

            to {
                opacity: .4
            }
        }

        @keyframes swal-loading-anim {
            0% {
                opacity: .4
            }

            20% {
                opacity: .4
            }

            50% {
                opacity: 1
            }

            to {
                opacity: .4
            }
        }

        .swal-overlay {
            position: fixed;
            top: 0;
            bottom: 0;
            left: 0;
            right: 0;
            text-align: center;
            font-size: 0;
            overflow-y: auto;
            background-color: rgba(0, 0, 0, .4);
            z-index: 10000;
            pointer-events: none;
            opacity: 0;
            transition: opacity .3s
        }

        .swal-overlay:before {
            content: " ";
            display: inline-block;
            vertical-align: middle;
            height: 100%
        }

        .swal-overlay--show-modal {
            opacity: 1;
            pointer-events: auto
        }

        .swal-overlay--show-modal .swal-modal {
            opacity: 1;
            pointer-events: auto;
            box-sizing: border-box;
            -webkit-animation: showSweetAlert .3s;
            animation: showSweetAlert .3s;
            will-change: transform
        }

        .swal-modal {
            width: 478px;
            opacity: 0;
            pointer-events: none;
            background-color: #fff;
            text-align: center;
            border-radius: 5px;
            position: static;
            margin: 20px auto;
            display: inline-block;
            vertical-align: middle;
            -webkit-transform: scale(1);
            transform: scale(1);
            -webkit-transform-origin: 50% 50%;
            transform-origin: 50% 50%;
            z-index: 10001;
            transition: opacity .2s, -webkit-transform .3s;
            transition: transform .3s, opacity .2s;
            transition: transform .3s, opacity .2s, -webkit-transform .3s
        }

        @media (max-width:500px) {
            .swal-modal {
                width: calc(100% - 20px)
            }
        }

        @-webkit-keyframes showSweetAlert {
            0% {
                -webkit-transform: scale(1);
                transform: scale(1)
            }

            1% {
                -webkit-transform: scale(.5);
                transform: scale(.5)
            }

            45% {
                -webkit-transform: scale(1.05);
                transform: scale(1.05)
            }

            80% {
                -webkit-transform: scale(.95);
                transform: scale(.95)
            }

            to {
                -webkit-transform: scale(1);
                transform: scale(1)
            }
        }

        @keyframes showSweetAlert {
            0% {
                -webkit-transform: scale(1);
                transform: scale(1)
            }

            1% {
                -webkit-transform: scale(.5);
                transform: scale(.5)
            }

            45% {
                -webkit-transform: scale(1.05);
                transform: scale(1.05)
            }

            80% {
                -webkit-transform: scale(.95);
                transform: scale(.95)
            }

            to {
                -webkit-transform: scale(1);
                transform: scale(1)
            }
        }
    </style>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>nebosh VALIDATION</title>


    <!--<link rel="shortcut icon" href="https://nebosh-validation-verisecure.org/public/assets/images/logo/fav_icon.gif" />-->

    <link rel="stylesheet"
        href="https://nebosh-validation-verisecure.org/public/assets/website/css/dashlite.css?ver=2.2.0">

    <link href="https://nebosh-validation-verisecure.org/public/assets/css/google-fonts-manrope-roboto.css"
        rel="stylesheet">

    <style>
        body {
            background-color: white;
            font-family: "Roboto", sans-serif;
            color: #333 !important;
        }

        h5 {
            font-family: "Roboto", sans-serif;
        }

        .content-wrapper {
            max-width: 1200px;
            margin: 40px auto;
            border-radius: 8px;
        }

        .section-header {
            font-weight: bold;
            font-size: 20px;
        }

        .details-row {
            display: flex;
            justify-content: space-between;
            flex-wrap: wrap;
            gap: 20px;
        }

        .details-column h5 {
            font-weight: bold;
            font-size: 16px;
            color: #000;
            letter-spacing: -0.5px;
            min-width: 180px;
        }

        .details-column p {
            font-size: 16px;
            margin: 0;
            color: #000;
            letter-spacing: -0.5px;
            margin-bottom: 5px;
        }

        .verification-box {
            padding: 20px;
            background-color: #e6e6fa;
            border-radius: 20px;
            margin: 20px 0;
            text-align: center;
            max-width: 480px;
        }

        .verification-box p {
            margin: 0 0 15px;
            font-weight: bold;
            font-size: 16px;
            color: #000;
            line-height: 1.2;
        }

        .auth-input {
            margin: 20px 0;
            display: flex;
            justify-content: center;
        }

        .auth-input input {
            width: 300px;
            padding: 10px;
            font-size: 14px;
            border: 1px solid #ddd;
            border-radius: 5px;
        }

        .action-buttons {
            display: flex;
            justify-content: center;
            gap: 20px;
        }

        .action-buttons .btn {
            padding: 10px 20px;
            font-size: 14px;
            font-weight: bold;
            border: none;
            border-radius: 5px;
            cursor: pointer;
        }

        .btn-accept {
            background-color: #5cb85c;
            color: white;
        }

        .btn-deny {
            background-color: #d9534f;
            color: white;
        }

        .custom-swal-popup {
            border-radius: 10px;
            /* Rounded corners for the popup */
            padding: 20px;
            /* Add padding to the popup */
            position: relative;
            /* Required for button absolute positioning */
            width: 400px;
            /* Limit the width */
            text-align: center;
            /* Center align the content */
        }

        .custom-swal-button {
            font-size: 10px;
            /* Button font size */
            font-weight: bold;
            /* Button font weight */
            padding: 5px 20px;
            /* Button padding */
            border-radius: 5px;
            /* Rounded corners for the button */
            background-color: #3f51b5;
            /* Blue color for the button */
            color: white;
            /* White text color for the button */
            box-shadow: 0px 2px 5px rgba(0, 0, 0, 0.2);
            /* Add subtle shadow to the button */
            cursor: pointer;
        }

        /* deny alert classes  */

        /* Custom SweetAlert Popup */
        .custom-swal-popup {
            width: 500px;
            padding: 20px;
            border-radius: 10px;
            text-align: center;
            font-family: "Roboto", sans-serif;
        }

        /* Confirm (Reject Request) Button */
        .custom-swal-reject {
            background-color: #3f51b5;
            color: #fff;
            font-size: 14px;
            font-weight: bold;
            border-radius: 5px;
            padding: 8px 20px;
            border: none;
            box-shadow: 0px 2px 5px rgba(0, 0, 0, 0.2);
            margin-left: 10px;
            cursor: pointer;
        }

        /* Cancel Button */
        .custom-swal-cancel {
            background-color: #e74c3c;
            color: #fff;
            font-size: 14px;
            font-weight: bold;
            border-radius: 5px;
            padding: 8px 20px;
            border: none;
            box-shadow: 0px 2px 5px rgba(0, 0, 0, 0.2);
            cursor: pointer;
        }

        /* Hover Effects */
        .custom-swal-reject:hover {
            background-color: #324a9b;
        }

        .custom-swal-cancel:hover {
            background-color: #c0392b;
        }

        /* SweetAlert Textarea */
        .swal2-textarea {
            width: 100%;
            height: 100px;
            font-size: 14px;
            color: #757575;
            border: 1px solid #d9d9d9;
            border-radius: 4px;
            padding: 10px;
            margin-top: 10px;
        }
    </style>

</head>

<body class="nk-body ui-rounder has-sidebar no-touch nk-nio-theme" style="background-color: white; overflow-x: hidden"
    data-new-gr-c-s-check-loaded="14.1218.0" data-gr-ext-installed="">

    <div class="nk-app-root">
        <!-- main @s -->
        <div class="nk-main">
            <!-- wrap @s -->
            <div class="nk-wrap">
                <!-- content @s -->
                <div class=" ">
                    <div class="">
                        <div class="nk-content-body d-xxl-flex align-content-xxl-center justify-content-xxl-center">
                            <div class="components-preview wide-xl">
                                <div class="nk-block nk-block-xl">
                                    <div class="nk-block-head" style="
                        display: flex;
                        flex-direction: row;
                        justify-content: center;
                        align-items: start;
                      ">

                                        <!--<img src="https://nebosh-validation-verisecure.org/public/assets/images/logo/neboshLogo.png"  style="width: 250px; margin: 0 auto">-->
                                        <div _ngcontent-ng-c3885976823=""
                                            style="width: 100%; display: flex; justify-content: center; flex-wrap: wrap;">
                                            <img _ngcontent-ng-c3885976823="" src="{{ asset('assets/NeboshLogo.jpg') }}"
                                                style="width: 250px;">
                                        </div>

                                    </div>
                                    <div class="content-wrapper">
                                        <div class="details-row mx-4">
                                            <div class="details-column">
                                                <div class="section-header">Details Requested</div>
                                                <div class="d-flex gap-4">
                                                    <h5 class="mb-0">Certificate Name:</h5>
                                                    <p>{{ $record->learner_name }}
                                                        <!--</p-->
                                                    </p>
                                                </div>
                                                <div class="d-flex gap-4">
                                                    <h5 class="mb-0">Certificate Date:</h5>
                                                    {{-- <p>11/01/2023</p> --}}
                                                    <p>{{ date('d/m/Y', strtotime($record->date_awarded)) }}</p>
                                                </div>
                                                <div class="d-flex gap-4">
                                                    <h5 class="mb-0">Qualification:</h5>
                                                    <p>
                                                        {{-- Nebosh International General Certificate in Occupational
                                                        Safety and Health --}}
                                                        {{ $certificate->name }}
                                                    </p>
                                                </div>
                                                <div class="d-flex gap-4">
                                                    <h5 class="mb-0">Master log certificate No:</h5>
                                                    {{-- <p>00720561/1332983</p> --}}
                                                    <p>{{ $record->certificate_log_number }}</p>
                                                </div>
                                            </div>
                                            <div class="details-column">
                                                <div class="section-header">Requester Details</div>
                                                <div class="d-flex gap-4 align-content-center">
                                                    <h5 class="mb-0">Requested By:</h5>
                                                    <p>{{ $certificateRequest->requester_name }}</p>
                                                </div>
                                                <div class="d-flex gap-4 align-content-center">
                                                    <h5 class="mb-0">Organisation:</h5>
                                                    <p>{{ $certificateRequest->requester_organisation }}</p>
                                                </div>
                                                <div class="d-flex gap-4 align-content-center">
                                                    <h5 class="mb-0">Email:</h5>
                                                    <p>{{ $certificateRequest->requester_email }}</p>
                                                </div>
                                                <div class="d-flex gap-4 align-content-center">
                                                    <h5>Requested:</h5>
                                                    <p>
                                                        {{-- 29/01/2025 07:49 --}}
                                                        {{ date('d/m/Y H:i', strtotime($certificateRequest->created_at))
                                                        }}
                                                    </p>
                                                </div>
                                            </div>
                                        </div>
                                        <div
                                            style="display: flex; flex-direction: column; justify-content: center; align-items: center;">
                                            <div class="verification-box tobe-hide">
                                                <p>
                                                    If you consent to this verification, please enter
                                                    the authentication code provided to you by email in
                                                    the space below and click 'Accept'.
                                                </p>
                                                <p>
                                                    If you do NOT consent to this verification, please
                                                    enter the authentication code provided to you by
                                                    email in the space below and click 'Deny'.
                                                </p>
                                            </div>

                                            <div class="verification-box tobe-show" style="display: none;">
                                                <p>
                                                    Thank you for authorising this request.
                                                    <br> <br>
                                                    An email has been sent to the requesting party containing
                                                    confirmation of your certification.
                                                </p>
                                            </div>
                                        </div>
                                        <div style="display: flex; flex-direction: row; justify-content: center; align-items: center;"
                                            class="tobe-hide">
                                            <div
                                                style="max-width: 500px; display: flex; flex-direction: row; justify-content: center; align-items: center; gap: 30px;">


                                                <label class="inp">
                                                    <input type="text" placeholder="&nbsp;" id="auth-code">
                                                    <span class="label">Auth Code</span>
                                                    <span class="focus-bg"></span>
                                                </label>
                                                <div class="action-buttons">
                                                    <a href="#" class="btn btn-dim btn-light reject-request" style="
                                color: red;
                                box-shadow: 0px 4px 6px rgba(0, 0, 0, 0.1);
                              " onmouseover="this.style.backgroundColor='rgba(255, 0, 0, 0.1)'"
                                                        onmouseout="this.style.backgroundColor=''">
                                                        {{-- <em class="icon ni ni-cross-circle-fill"></em> --}}
                                                        <span>Deny</span>
                                                    </a>
                                                    <a class="btn btn-dim btn-light eg-swal-default" style="
                                color: green;
                                box-shadow: 0px 4px 6px rgba(0, 0, 0, 0.1);
                              " id="submit-button" onmouseover="this.style.backgroundColor='rgba(0, 128, 0, 0.1)'"
                                                        onmouseout="this.style.backgroundColor=''">
                                                        {{-- <em class="icon ni ni-check"></em> --}}
                                                        <span>Accept</span>
                                                    </a>
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                                <!-- .components-preview -->
                            </div>
                        </div>
                    </div>
                </div>
                <!-- content @e -->
            </div>
            <!-- wrap @e -->
        </div>
        <!-- main @e -->
    </div>

    <script src="https://code.jquery.com/jquery-3.7.1.min.js"
        integrity="sha256-/JqT3SQfawRcv/BIHPThkBvs0OEvtFFmqPF/lYI/Cxo=" crossorigin="anonymous"></script>
    <script src="https://nebosh-validation-verisecure.org/public/assets/js/bundle.js?ver=2.2.0"></script>
    <script src="https://nebosh-validation-verisecure.org/public/assets/js/scripts.js?ver=2.2.0"></script>
    <script src="https://nebosh-validation-verisecure.org/public/assets/js/sweetalert.min.js"></script>
    <script src="https://cdn.jsdelivr.net/npm/sweetalert2@11"></script>


    <script>
        $('#submit-button').on('click', function(e) {
            e.preventDefault();
            var auth_code = $('#auth-code').val();
            var uuid = "{{ $certificateRequest->uuid }}";
            if (auth_code == '') {

                $('#auth-code-error').removeClass('d-none');
                $('#auth-code').focus();
                return;

            }

            var route = "{{ route('validation.verification.completeRequest') }}";

            $.ajax({
                url: route,
                method: "get",
                dataType: "json",
                data: {
                    authCode: auth_code,
                    validationRequestId: uuid,
                    accepted: true


                },
                beforeSend: function() {
                    $('#submit-button').html('Please wait...'); // Correct way to change the inner HTML
                    $('#submit-button').attr('disabled', true); // Correct way to disable the button

                },
                success: function(data) {

                    if (data.success == true) {

                        // Swal.fire({
                        //     title: 'Success!',
                        //     text: data.body,
                        //     icon: 'success',
                        //     confirmButtonText: 'OK'
                        // }).then(() => {
                        //     resetValues();
                            $('.tobe-hide').hide();
                            $('.tobe-show').show();
                        // });


                    } else {

                        Swal.fire({
                            html: `
                                        <div style="background-color: #FFF8C5; padding: 30px; border-radius: 8px; display: inline-block;">
                                            <b style="color: red; font-size: 30px;">${data.error}</b>
                                        </div>
                                    `,
                            showConfirmButton: true,
                            confirmButtonText: "OK",
                            confirmButtonColor: "#3f51b5",
                            customClass: {
                                popup: "custom-swal-popup",
                                confirmButton: "custom-swal-button",
                            },
                            customClass: {
                                confirmButton: 'no-border-btn'
                            }
                        }).then(() => {
                            resetValues();

                        });

                    }

                },
                error: function() {


                    Swal.fire({
                        html: `
                                        <div style="background-color: #FFF8C5; padding: 30px; border-radius: 8px; display: inline-block;">
                                            <b style="color: red; font-size: 30px;">Verification failed. please try again later</b>
                                        </div>
                                    `,
                        showConfirmButton: true,
                        confirmButtonText: "OK",
                        confirmButtonColor: "#3f51b5",
                        customClass: {
                            popup: "custom-swal-popup",
                            confirmButton: "custom-swal-button",
                        },
                        customClass: {
                            confirmButton: 'no-border-btn'
                        }
                    }).then(() => {
                        resetValues();

                    });



                }

            });


        });

        function resetValues() {
            $('#auth-code-error').addClass('d-none');
            $('#submit-button').html('<em class="icon ni ni-check"></em> Accept');
            $('#auth-code').val('');
            $('#submit-button').attr('disabled', false);

        }
    </script>

    {!! NoCaptcha::renderJs() !!}
    <!-- Modal Overlay -->
    <div id="recaptcha-modal" class="recaptcha-modal">
        <div class="recaptcha-content">
            {!! NoCaptcha::display(['data-callback' => 'onRecaptchaSuccess']) !!}
        </div>
    </div>

    <script>
        // Callback function executed upon successful reCAPTCHA verification
        function onRecaptchaSuccess() {
            // Hide the reCAPTCHA modal
            document.getElementById('recaptcha-modal').style.display = 'none';
            // Display the protected content
            document.querySelector('.components-preview').style.display = 'block';
        }
    </script>

    <style>
        /* Modal overlay */
        .recaptcha-modal {
            display: flex;
            justify-content: center;
            align-items: center;
            position: fixed;
            z-index: 1000;
            left: 0;
            top: 0;
            width: 100%;
            height: 100%;
            background-color: rgba(0, 0, 0, 0.5);
        }

        /* Modal content */
        .recaptcha-content {
            background-color: #fff;
            border-radius: 8px;
            box-shadow: 0 4px 8px rgba(0, 0, 0, 0.2);
            padding: 20px;
            text-align: center;
        }

        /* Hidden content */
        .components-preview {
            display: none;
        }
    </style>



</body>
<grammarly-desktop-integration data-grammarly-shadow-root="true"></grammarly-desktop-integration>

</html>
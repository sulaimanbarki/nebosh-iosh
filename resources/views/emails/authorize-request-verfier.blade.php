<!DOCTYPE html>
<html lang="en">

<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>Verification Request</title>
    <style>
        * {
            color: black !important;
        }
        a {
            color: #15c !important;
        }
    </style>
</head>

<body>
    <div id=":nu" class="ii gt"
        jslog="20277; u014N:xr6bB; 1:WyIjdGhyZWFkLWY6MTgxNzg0NjcyOTE5MjE2MDQ5OSJd; 4:WyIjbXNnLWY6MTgxNzg0NjcyOTE5MjE2MDQ5OSIsbnVsbCxudWxsLG51bGwsMCwwLFsxLDAsMF0sMzc2LDIzMzksbnVsbCxudWxsLG51bGwsbnVsbCxudWxsLDEsbnVsbCxudWxsLFszXSxudWxsLG51bGwsbnVsbCxudWxsLG51bGwsbnVsbCwwXQ..">
        <div id=":nv" class="a3s aiL "><img
                src="https://ci3.googleusercontent.com/meips/ADKq_NbeAq0wMuS9GQbRnGgC2sFLzJcHVF8rb8uZrPhSnFxjK84gm8-_DvlOW3NRSkIkdQtRuDG6vnSa4ixFhbQisCl6X7zlb5K_l18tVjahe1ddxXyjew=s0-d-e1-ft#https://nebosh-validation.verisecure.org/assets/NeboshLogo.jpg"
                height="200" width="200" alt="NeboshLogo" class="CToWUd a6T" data-bit="iit" tabindex="0">
            <div class="a6S" dir="ltr" style="opacity: 0.01; left: 160px; top: 164px;"><span
                    data-is-tooltip-wrapper="true" class="a5q" jsaction="JIbuQc:.CLIENT"><button
                        class="VYBDae-JX-I VYBDae-JX-I-ql-ay5-ays CgzRE" jscontroller="PIVayb"
                        jsaction="click:h5M12e; clickmod:h5M12e;pointerdown:FEiYhc;pointerup:mF5Elf;pointerenter:EX0mI;pointerleave:vpvbp;pointercancel:xyn4sd;contextmenu:xexox;focus:h06R8; blur:zjh6rb;mlnRJb:fLiPzd;"
                        data-idom-class="CgzRE" data-use-native-focus-logic="true" jsname="hRZeKc"
                        aria-label="Download attachment " data-tooltip-enabled="true" data-tooltip-id="tt-c180"
                        data-tooltip-classes="AZPksf" id=""
                        jslog="91252; u014N:cOuCgd,Kr2w4b,xr6bB; 4:WyIjbXNnLWY6MTgxNzg0NjcyOTE5MjE2MDQ5OSJd; 43:WyJpbWFnZS9qcGVnIl0."><span
                            class="OiePBf-zPjgPe VYBDae-JX-UHGRz"></span><span class="bHC-Q" jscontroller="LBaJxb"
                            jsname="m9ZlFb" soy-skip="" ssk="6:RWVI5c"></span><span class="VYBDae-JX-ank-Rtc0Jf"
                            jsname="S5tZuc" aria-hidden="true"><span class="notranslate bzc-ank" aria-hidden="true"><svg
                                    viewBox="0 -960 960 960" height="20" width="20" focusable="false"
                                    class=" aoH">
                                    <path
                                        d="M480-336L288-528l51-51L444-474V-816h72v342L621-579l51,51L480-336ZM263.72-192Q234-192 213-213.15T192-264v-72h72v72H696v-72h72v72q0,29.7-21.16,50.85T695.96-192H263.72Z">
                                    </path>
                                </svg></span></span>
                        <div class="VYBDae-JX-ano"></div>
                    </button>
                    <div class="ne2Ple-oshW8e-J9" id="tt-c180" role="tooltip" aria-hidden="true">Download</div>
                </span></div><br>
            <h1 style="font-family:verdana; font-size: 2em; color: black;"">Nebosh Certificate Management System</h1><br>
            <div style="font-family:verdana; color: black;""><br>
                Dear {{ $certificate_request->requester_name ?? '' }}<br>
                <br>
                Thank you for your recent verification request for certificate master log number {{ $record->certificate_log_number }}. We
                are pleased to advise you that NEBOSH has received authorisation to process your request, and we can
                confirm that NEBOSH issued this certificate to {{ $record->learner_name ?? '' }} on {{ date('m/d/Y', strtotime($record->date_awarded)) }}.<br>
                .<br>
                <br>
                <strong style="text-decoration:underline">Please note</strong> although NEBOSH does take every step to
                protect the security of these certificates we do recommend that you complete some additional checks to
                make sure that the person that has provided you with this certificate is genuine.<br>
                <br>
                <ol><br>
                    <li>Check all of the details below match what is printed on the certificate.<br>
                        <strong>Master log number: </strong>{{ $record->certificate_log_number }}<br>
                        <strong>Unit certificate/qualification name</strong>: {{ $certificate->name ?? ''}}
                        <br>
                    </li><br>
                    <li>As part of this verification, we have provided you with the date of birth that we have on record
                        for the certificate holder. This is information that is not printed on the certificate.
                        <strong>Please check this against government issued ID to make sure the dates
                            match.</strong><br>
                        <br>
                        <strong>Date of birth: </strong>{{ date('m/d/Y', strtotime($record->date_of_birth)) }}<br>
                        <br>
                    </li><br>
                    <li>Learner full name <strong>– check against government issued ID</strong>.<br>
                    </li><br>
                    <li>If the person requires a full qualification, please check that the qualification title is the
                        one required. If the title shows “a unit of” you have not verified that the learner has
                        completed the whole qualification. You will need to request a copy of the qualification
                        Parchment.<br>
                    </li><br>
                    <li>Learner's name is printed in the background of the certificate.<br>
                    </li>
                </ol><br>
                <strong>If you are in receipt of the original certificate please also check the following:</strong><br>
                <ol start="6"><br>
                    <li>The certificate is printed on high quality, watermarked security certificate paper.</li><br>
                    <li>If you have one, shine a UV light on the certificate to see the NEBOSH logo.</li><br>
                    <li>Check the NEBOSH hologram, the NEBOSH logo shape will be die-cut into the hologram and there
                        will be some depth to the hologram image. The individual images within the hologram will change
                        into a variety of colours when tilted at different angles.</li><br>
                </ol><br>
                <br>
                Once you have completed all the checks, if you believe that there is suspicious activity around the
                certificate you are verifying please report this to NEBOSH using our “Report suspicious certificate
                activity form” on our <a
                    href="https://u30899780.ct.sendgrid.net/ls/click?upn=u001.LJgHB4dEwwQCHgyprP1dqOKbD9lyM3BZ-2FnHGycM1WSLxjVZUkwV4-2BVAzwXaARc8fNMmvEFb3mpPcOY61Wqx8EQN1Fbqm3gq1-2Ffq89lnJbi0-3DEiAK_G5ih5bDnXOHFCn616ZUqsUcL-2FmMIbprnXH6lyJGKV6DWKaLGBjDc-2Bu65P6x1nU4tTzSEabJHSEuhs3aV8DCUAxNg85gZ238R4FYjm-2FRTEBiZBZh-2BS5YaZot2Ac2-2BrdIIHcL9weT9E262NtKD9c1BMXhtf1-2FRFPCDczmugWvpP4afP-2BYGDJ14EkeT47yCA6fdNanyLYbMiSY1I1gV2ALpY-2Fd9AbxjSusMq9uyEe97wWE-3D"
                    target="_blank"
                    data-saferedirecturl="https://www.google.com/url?q=https://u30899780.ct.sendgrid.net/ls/click?upn%3Du001.LJgHB4dEwwQCHgyprP1dqOKbD9lyM3BZ-2FnHGycM1WSLxjVZUkwV4-2BVAzwXaARc8fNMmvEFb3mpPcOY61Wqx8EQN1Fbqm3gq1-2Ffq89lnJbi0-3DEiAK_G5ih5bDnXOHFCn616ZUqsUcL-2FmMIbprnXH6lyJGKV6DWKaLGBjDc-2Bu65P6x1nU4tTzSEabJHSEuhs3aV8DCUAxNg85gZ238R4FYjm-2FRTEBiZBZh-2BS5YaZot2Ac2-2BrdIIHcL9weT9E262NtKD9c1BMXhtf1-2FRFPCDczmugWvpP4afP-2BYGDJ14EkeT47yCA6fdNanyLYbMiSY1I1gV2ALpY-2Fd9AbxjSusMq9uyEe97wWE-3D&amp;source=gmail&amp;ust=1733720139105000&amp;usg=AOvVaw0OK4-XhLd2BWYQLNPCnV-0">verifications
                    page</a>, where you will also find our <em>“Verifying credentials to prevent qualification fraud –
                    Guide for Employers”</em>.<br>
                Regards<br>
                <br>
                NEBOSH Team<br>
            </div><br>
            <img src="https://ci3.googleusercontent.com/meips/ADKq_NaKnNAK13mHisW6pBXYCmd3QjaQm6rnhqa7qW0gSCM-mKI66Zcj-MWm1OyI8mKkzoBsd-PRpEPrJjfHakseVZSmTQ7QEfINzzXsHsLRkRPo6eso7Py0uCuyOJZAHW4Imt6b27LVK0MPE28khAreFrFLCr1WJhcu_3sAr0JgKMr2IumVCLyE5cOPce6_QAxmFb4isL0jxJG9PFSzvvrdnZ_5ehztPqFBNc78f8mCQdYT8f4Do0rZ_R5IBtCklfPJTHOOyaTuX1jhULM2dBqkz8QQKVZG3xKcjbWBHQ9EZ3CEpZSU0tay1FPeoFqXvVrp_DoGJtHnKzgAw38u1Twc1FsVxNFtA_Gf0jLCKhzJSms-HY7OBCyUFsG9d3kAWtsVizBMrFq_-Ry2-GKZBVk0UlAYH-r8lWSUrU5RROulodtsLMtwzIc1-WFZ_oaJZlloHJST3cUJAsPl=s0-d-e1-ft#https://u30899780.ct.sendgrid.net/wf/open?upn=u001.hZXTv23HCjhmPy48XRAsAeQY95q-2Fn4kdg83rjf9GAaRJKTTntx2CayaxKXmEqIu9F-2BIPVkMWXdocaSSONrtghKT4y77u6n8Wyw7bF2EiLF7jfkOj7mnQvhv4O81mp3ti1X-2BgkkhJUqsO7ym7WlIGbqRGfgzqvLueJ-2BLKWRICHIFFwX6QENxpbgRv3C-2FuKyo6m1FT-2B7UynNuLtXdt0KnMcecau2byfPIySUbYmdDme-2FCek0sJuB8LSlBqHkNMuLbY"
                alt="" width="1" height="1" border="0"
                style="height:1px!important;width:1px!important;border-width:0!important;margin-top:0!important;margin-bottom:0!important;margin-right:0!important;margin-left:0!important;padding-top:0!important;padding-bottom:0!important;padding-right:0!important;padding-left:0!important"
                class="CToWUd" data-bit="iit">
            <div class="yj6qo"></div>
            <div class="adL">
            </div>
        </div>
    </div>
</body>

</html>

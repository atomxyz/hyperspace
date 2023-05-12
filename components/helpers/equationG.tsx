import React, { useCallback, useEffect, useState } from "react";

export default function EquationG() {
  const [isMobile, setIsMobile] = useState(false);

  const handleResize = () => {
    if (window.innerWidth < 720) {
      setIsMobile(true);
    } else {
      setIsMobile(false);
    }
  };

  // create an event listener
  useEffect(() => {
    window.addEventListener("resize", handleResize);
  });

  const h = !isMobile ? "100%" : "67.560px";
  const w = !isMobile ? "100%" : "636.008px";
  const viewBox = !isMobile
    ? "0 -2116.3 35139.6 3732.7"
    : "0 -2116.3 35139.6 3732.7";

  {
    //Latex Input
    /* G = \Biggl \langle \begin{matrix}
        a_1, & a_2, & a_3\\ b_1, & b_2, & b_3\\ X, & Y, & Z\\ \end{matrix}{" "}
        \Biggl \vert \begin{matrix}
        [a_1,b_1] = X^{C[2]}Z^{-C[4]}, & [a_1,b_2] = X, & [a_1,b_3] = YZ^{-C[3]}
        X^{C[1]}\\ [a_2,b_1] = X, & [a_2,b_2] = Z, & \\ [a_3,b_1] = Y, & &
        [a_3,b_3] = X\\ \end{matrix} \Biggl \rangle */
  }
  return (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      width={w}
      height={h}
      viewBox={viewBox}
      xmlnsXlink="http://www.w3.org/1999/xlink"
      className="m-auto  text-center"
    >
      <defs>
        <path
          id="MJX-89-TEX-I-47"
          d="M50 252Q50 367 117 473T286 641T490 704Q580 704 633 653Q642 643 648 636T656 626L657 623Q660 623 684 649Q691 655 699 663T715 679T725 690L740 705H746Q760 705 760 698Q760 694 728 561Q692 422 692 421Q690 416 687 415T669 413H653Q647 419 647 422Q647 423 648 429T650 449T651 481Q651 552 619 605T510 659Q492 659 471 656T418 643T357 615T294 567T236 496T189 394T158 260Q156 242 156 221Q156 173 170 136T206 79T256 45T308 28T353 24Q407 24 452 47T514 106Q517 114 529 161T541 214Q541 222 528 224T468 227H431Q425 233 425 235T427 254Q431 267 437 273H454Q494 271 594 271Q634 271 659 271T695 272T707 272Q721 272 721 263Q721 261 719 249Q714 230 709 228Q706 227 694 227Q674 227 653 224Q646 221 643 215T629 164Q620 131 614 108Q589 6 586 3Q584 1 581 1Q571 1 553 21T530 52Q530 53 528 52T522 47Q448 -22 322 -22Q201 -22 126 55T50 252Z"
        ></path>
        <path
          id="MJX-89-TEX-N-3D"
          d="M56 347Q56 360 70 367H707Q722 359 722 347Q722 336 708 328L390 327H72Q56 332 56 347ZM56 153Q56 168 72 173H708Q722 163 722 153Q722 140 707 133H70Q56 140 56 153Z"
        ></path>
        <path
          id="MJX-89-TEX-S4-27E8"
          d="M140 242V260L386 994Q633 1729 635 1732Q643 1745 657 1749Q658 1749 662 1749T668 1750Q682 1749 692 1740T702 1714V1705L214 251L703 -1204L702 -1213Q702 -1230 692 -1239T667 -1248H664Q647 -1248 635 -1231Q633 -1228 386 -493L140 242Z"
        ></path>
        <path
          id="MJX-89-TEX-I-61"
          d="M33 157Q33 258 109 349T280 441Q331 441 370 392Q386 422 416 422Q429 422 439 414T449 394Q449 381 412 234T374 68Q374 43 381 35T402 26Q411 27 422 35Q443 55 463 131Q469 151 473 152Q475 153 483 153H487Q506 153 506 144Q506 138 501 117T481 63T449 13Q436 0 417 -8Q409 -10 393 -10Q359 -10 336 5T306 36L300 51Q299 52 296 50Q294 48 292 46Q233 -10 172 -10Q117 -10 75 30T33 157ZM351 328Q351 334 346 350T323 385T277 405Q242 405 210 374T160 293Q131 214 119 129Q119 126 119 118T118 106Q118 61 136 44T179 26Q217 26 254 59T298 110Q300 114 325 217T351 328Z"
        ></path>
        <path
          id="MJX-89-TEX-N-31"
          d="M213 578L200 573Q186 568 160 563T102 556H83V602H102Q149 604 189 617T245 641T273 663Q275 666 285 666Q294 666 302 660V361L303 61Q310 54 315 52T339 48T401 46H427V0H416Q395 3 257 3Q121 3 100 0H88V46H114Q136 46 152 46T177 47T193 50T201 52T207 57T213 61V578Z"
        ></path>
        <path
          id="MJX-89-TEX-N-2C"
          d="M78 35T78 60T94 103T137 121Q165 121 187 96T210 8Q210 -27 201 -60T180 -117T154 -158T130 -185T117 -194Q113 -194 104 -185T95 -172Q95 -168 106 -156T131 -126T157 -76T173 -3V9L172 8Q170 7 167 6T161 3T152 1T140 0Q113 0 96 17Z"
        ></path>
        <path
          id="MJX-89-TEX-N-32"
          d="M109 429Q82 429 66 447T50 491Q50 562 103 614T235 666Q326 666 387 610T449 465Q449 422 429 383T381 315T301 241Q265 210 201 149L142 93L218 92Q375 92 385 97Q392 99 409 186V189H449V186Q448 183 436 95T421 3V0H50V19V31Q50 38 56 46T86 81Q115 113 136 137Q145 147 170 174T204 211T233 244T261 278T284 308T305 340T320 369T333 401T340 431T343 464Q343 527 309 573T212 619Q179 619 154 602T119 569T109 550Q109 549 114 549Q132 549 151 535T170 489Q170 464 154 447T109 429Z"
        ></path>
        <path
          id="MJX-89-TEX-N-33"
          d="M127 463Q100 463 85 480T69 524Q69 579 117 622T233 665Q268 665 277 664Q351 652 390 611T430 522Q430 470 396 421T302 350L299 348Q299 347 308 345T337 336T375 315Q457 262 457 175Q457 96 395 37T238 -22Q158 -22 100 21T42 130Q42 158 60 175T105 193Q133 193 151 175T169 130Q169 119 166 110T159 94T148 82T136 74T126 70T118 67L114 66Q165 21 238 21Q293 21 321 74Q338 107 338 175V195Q338 290 274 322Q259 328 213 329L171 330L168 332Q166 335 166 348Q166 366 174 366Q202 366 232 371Q266 376 294 413T322 525V533Q322 590 287 612Q265 626 240 626Q208 626 181 615T143 592T132 580H135Q138 579 143 578T153 573T165 566T175 555T183 540T186 520Q186 498 172 481T127 463Z"
        ></path>
        <path
          id="MJX-89-TEX-I-62"
          d="M73 647Q73 657 77 670T89 683Q90 683 161 688T234 694Q246 694 246 685T212 542Q204 508 195 472T180 418L176 399Q176 396 182 402Q231 442 283 442Q345 442 383 396T422 280Q422 169 343 79T173 -11Q123 -11 82 27T40 150V159Q40 180 48 217T97 414Q147 611 147 623T109 637Q104 637 101 637H96Q86 637 83 637T76 640T73 647ZM336 325V331Q336 405 275 405Q258 405 240 397T207 376T181 352T163 330L157 322L136 236Q114 150 114 114Q114 66 138 42Q154 26 178 26Q211 26 245 58Q270 81 285 114T318 219Q336 291 336 325Z"
        ></path>
        <path
          id="MJX-89-TEX-I-58"
          d="M42 0H40Q26 0 26 11Q26 15 29 27Q33 41 36 43T55 46Q141 49 190 98Q200 108 306 224T411 342Q302 620 297 625Q288 636 234 637H206Q200 643 200 645T202 664Q206 677 212 683H226Q260 681 347 681Q380 681 408 681T453 682T473 682Q490 682 490 671Q490 670 488 658Q484 643 481 640T465 637Q434 634 411 620L488 426L541 485Q646 598 646 610Q646 628 622 635Q617 635 609 637Q594 637 594 648Q594 650 596 664Q600 677 606 683H618Q619 683 643 683T697 681T738 680Q828 680 837 683H845Q852 676 852 672Q850 647 840 637H824Q790 636 763 628T722 611T698 593L687 584Q687 585 592 480L505 384Q505 383 536 304T601 142T638 56Q648 47 699 46Q734 46 734 37Q734 35 732 23Q728 7 725 4T711 1Q708 1 678 1T589 2Q528 2 496 2T461 1Q444 1 444 10Q444 11 446 25Q448 35 450 39T455 44T464 46T480 47T506 54Q523 62 523 64Q522 64 476 181L429 299Q241 95 236 84Q232 76 232 72Q232 53 261 47Q262 47 267 47T273 46Q276 46 277 46T280 45T283 42T284 35Q284 26 282 19Q279 6 276 4T261 1Q258 1 243 1T201 2T142 2Q64 2 42 0Z"
        ></path>
        <path
          id="MJX-89-TEX-I-59"
          d="M66 637Q54 637 49 637T39 638T32 641T30 647T33 664T42 682Q44 683 56 683Q104 680 165 680Q288 680 306 683H316Q322 677 322 674T320 656Q316 643 310 637H298Q242 637 242 624Q242 619 292 477T343 333L346 336Q350 340 358 349T379 373T411 410T454 461Q546 568 561 587T577 618Q577 634 545 637Q528 637 528 647Q528 649 530 661Q533 676 535 679T549 683Q551 683 578 682T657 680Q684 680 713 681T746 682Q763 682 763 673Q763 669 760 657T755 643Q753 637 734 637Q662 632 617 587Q608 578 477 424L348 273L322 169Q295 62 295 57Q295 46 363 46Q379 46 384 45T390 35Q390 33 388 23Q384 6 382 4T366 1Q361 1 324 1T232 2Q170 2 138 2T102 1Q84 1 84 9Q84 14 87 24Q88 27 89 30T90 35T91 39T93 42T96 44T101 45T107 45T116 46T129 46Q168 47 180 50T198 63Q201 68 227 171L252 274L129 623Q128 624 127 625T125 627T122 629T118 631T113 633T105 634T96 635T83 636T66 637Z"
        ></path>
        <path
          id="MJX-89-TEX-I-5A"
          d="M58 8Q58 23 64 35Q64 36 329 334T596 635L586 637Q575 637 512 637H500H476Q442 637 420 635T365 624T311 598T266 548T228 469Q227 466 226 463T224 458T223 453T222 450L221 448Q218 443 202 443Q185 443 182 453L214 561Q228 606 241 651Q249 679 253 681Q256 683 487 683H718Q723 678 723 675Q723 673 717 649Q189 54 188 52L185 49H274Q369 50 377 51Q452 60 500 100T579 247Q587 272 590 277T603 282H607Q628 282 628 271Q547 5 541 2Q538 0 300 0H124Q58 0 58 8Z"
        ></path>
        <path
          id="MJX-89-TEX-S4-2223"
          d="M139 -249H137Q125 -249 119 -235V251L120 737Q130 750 139 750Q152 750 159 735V-235Q151 -249 141 -249H139Z"
        ></path>
        <path
          id="MJX-89-TEX-N-5B"
          d="M118 -250V750H255V710H158V-210H255V-250H118Z"
        ></path>
        <path
          id="MJX-89-TEX-N-5D"
          d="M22 710V750H159V-250H22V-210H119V710H22Z"
        ></path>
        <path
          id="MJX-89-TEX-I-43"
          d="M50 252Q50 367 117 473T286 641T490 704Q580 704 633 653Q642 643 648 636T656 626L657 623Q660 623 684 649Q691 655 699 663T715 679T725 690L740 705H746Q760 705 760 698Q760 694 728 561Q692 422 692 421Q690 416 687 415T669 413H653Q647 419 647 422Q647 423 648 429T650 449T651 481Q651 552 619 605T510 659Q484 659 454 652T382 628T299 572T226 479Q194 422 175 346T156 222Q156 108 232 58Q280 24 350 24Q441 24 512 92T606 240Q610 253 612 255T628 257Q648 257 648 248Q648 243 647 239Q618 132 523 55T319 -22Q206 -22 128 53T50 252Z"
        ></path>
        <path
          id="MJX-89-TEX-N-2212"
          d="M84 237T84 250T98 270H679Q694 262 694 250T679 230H98Q84 237 84 250Z"
        ></path>
        <path
          id="MJX-89-TEX-N-34"
          d="M462 0Q444 3 333 3Q217 3 199 0H190V46H221Q241 46 248 46T265 48T279 53T286 61Q287 63 287 115V165H28V211L179 442Q332 674 334 675Q336 677 355 677H373L379 671V211H471V165H379V114Q379 73 379 66T385 54Q393 47 442 46H471V0H462ZM293 211V545L74 212L183 211H293Z"
        ></path>
        <path
          id="MJX-89-TEX-S4-27E9"
          d="M103 1714Q103 1732 114 1741T137 1750Q157 1750 170 1732Q172 1729 419 994L665 260V242L419 -493Q172 -1228 170 -1231Q158 -1248 141 -1248H138Q123 -1248 113 -1239T103 -1213V-1204L591 251L103 1705V1714Z"
        ></path>
      </defs>
      <g
        stroke="currentColor"
        fill="currentColor"
        strokeWidth="0"
        transform="matrix(1 0 0 -1 0 0)"
      >
        <g data-mml-node="math">
          <g data-mml-node="mi">
            <use xlinkHref="#MJX-89-TEX-I-47"></use>
          </g>
          <g data-mml-node="mo" transform="translate(1063.8, 0)">
            <use xlinkHref="#MJX-89-TEX-N-3D"></use>
          </g>
          <g data-mml-node="TeXAtom" transform="translate(2119.6, 0)">
            <g data-mml-node="mo">
              <use xlinkHref="#MJX-89-TEX-S4-27E8"></use>
            </g>
          </g>
          <g data-mml-node="mtable" transform="translate(2925.6, 0)">
            <g data-mml-node="mtr" transform="translate(0, 1294.7)">
              <g data-mml-node="mtd">
                <g data-mml-node="msub">
                  <g data-mml-node="mi">
                    <use xlinkHref="#MJX-89-TEX-I-61"></use>
                  </g>
                  <g
                    data-mml-node="mn"
                    transform="translate(529, -150) scale(0.707)"
                  >
                    <use xlinkHref="#MJX-89-TEX-N-31"></use>
                  </g>
                </g>
                <g data-mml-node="mo" transform="translate(932.6, 0)">
                  <use xlinkHref="#MJX-89-TEX-N-2C"></use>
                </g>
              </g>
              <g data-mml-node="mtd" transform="translate(2210.6, 0)">
                <g data-mml-node="msub">
                  <g data-mml-node="mi">
                    <use xlinkHref="#MJX-89-TEX-I-61"></use>
                  </g>
                  <g
                    data-mml-node="mn"
                    transform="translate(529, -150) scale(0.707)"
                  >
                    <use xlinkHref="#MJX-89-TEX-N-32"></use>
                  </g>
                </g>
                <g data-mml-node="mo" transform="translate(932.6, 0)">
                  <use xlinkHref="#MJX-89-TEX-N-2C"></use>
                </g>
              </g>
              <g data-mml-node="mtd" transform="translate(4421.1, 0)">
                <g data-mml-node="msub">
                  <g data-mml-node="mi">
                    <use xlinkHref="#MJX-89-TEX-I-61"></use>
                  </g>
                  <g
                    data-mml-node="mn"
                    transform="translate(529, -150) scale(0.707)"
                  >
                    <use xlinkHref="#MJX-89-TEX-N-33"></use>
                  </g>
                </g>
              </g>
            </g>
            <g data-mml-node="mtr">
              <g data-mml-node="mtd" transform="translate(50, 0)">
                <g data-mml-node="msub">
                  <g data-mml-node="mi">
                    <use xlinkHref="#MJX-89-TEX-I-62"></use>
                  </g>
                  <g
                    data-mml-node="mn"
                    transform="translate(429, -150) scale(0.707)"
                  >
                    <use xlinkHref="#MJX-89-TEX-N-31"></use>
                  </g>
                </g>
                <g data-mml-node="mo" transform="translate(832.6, 0)">
                  <use xlinkHref="#MJX-89-TEX-N-2C"></use>
                </g>
              </g>
              <g data-mml-node="mtd" transform="translate(2260.6, 0)">
                <g data-mml-node="msub">
                  <g data-mml-node="mi">
                    <use xlinkHref="#MJX-89-TEX-I-62"></use>
                  </g>
                  <g
                    data-mml-node="mn"
                    transform="translate(429, -150) scale(0.707)"
                  >
                    <use xlinkHref="#MJX-89-TEX-N-32"></use>
                  </g>
                </g>
                <g data-mml-node="mo" transform="translate(832.6, 0)">
                  <use xlinkHref="#MJX-89-TEX-N-2C"></use>
                </g>
              </g>
              <g data-mml-node="mtd" transform="translate(4471.1, 0)">
                <g data-mml-node="msub">
                  <g data-mml-node="mi">
                    <use xlinkHref="#MJX-89-TEX-I-62"></use>
                  </g>
                  <g
                    data-mml-node="mn"
                    transform="translate(429, -150) scale(0.707)"
                  >
                    <use xlinkHref="#MJX-89-TEX-N-33"></use>
                  </g>
                </g>
              </g>
            </g>
            <g data-mml-node="mtr" transform="translate(0, -1294.7)">
              <g data-mml-node="mtd" transform="translate(52.3, 0)">
                <g data-mml-node="mi">
                  <use xlinkHref="#MJX-89-TEX-I-58"></use>
                </g>
                <g data-mml-node="mo" transform="translate(828, 0)">
                  <use xlinkHref="#MJX-89-TEX-N-2C"></use>
                </g>
              </g>
              <g data-mml-node="mtd" transform="translate(2295.3, 0)">
                <g data-mml-node="mi">
                  <use xlinkHref="#MJX-89-TEX-I-59"></use>
                </g>
                <g data-mml-node="mo" transform="translate(763, 0)">
                  <use xlinkHref="#MJX-89-TEX-N-2C"></use>
                </g>
              </g>
              <g data-mml-node="mtd" transform="translate(4545.9, 0)">
                <g data-mml-node="mi">
                  <use xlinkHref="#MJX-89-TEX-I-5A"></use>
                </g>
              </g>
            </g>
          </g>
          <g data-mml-node="TeXAtom" transform="translate(8279.2, 0)">
            <g data-mml-node="mo">
              <svg
                width="278"
                height="2470"
                y="-985"
                x="0"
                viewBox="0 -306 278 2470"
              >
                <use
                  xlinkHref="#MJX-89-TEX-S4-2223"
                  transform="scale(1, 3.709)"
                ></use>
              </svg>
            </g>
          </g>
          <g data-mml-node="mtable" transform="translate(8557.2, 0)">
            <g data-mml-node="mtr" transform="translate(0, 1223)">
              <g data-mml-node="mtd">
                <g data-mml-node="mo">
                  <use xlinkHref="#MJX-89-TEX-N-5B"></use>
                </g>
                <g data-mml-node="msub" transform="translate(278, 0)">
                  <g data-mml-node="mi">
                    <use xlinkHref="#MJX-89-TEX-I-61"></use>
                  </g>
                  <g
                    data-mml-node="mn"
                    transform="translate(529, -150) scale(0.707)"
                  >
                    <use xlinkHref="#MJX-89-TEX-N-31"></use>
                  </g>
                </g>
                <g data-mml-node="mo" transform="translate(1210.6, 0)">
                  <use xlinkHref="#MJX-89-TEX-N-2C"></use>
                </g>
                <g data-mml-node="msub" transform="translate(1655.2, 0)">
                  <g data-mml-node="mi">
                    <use xlinkHref="#MJX-89-TEX-I-62"></use>
                  </g>
                  <g
                    data-mml-node="mn"
                    transform="translate(429, -150) scale(0.707)"
                  >
                    <use xlinkHref="#MJX-89-TEX-N-31"></use>
                  </g>
                </g>
                <g data-mml-node="mo" transform="translate(2487.8, 0)">
                  <use xlinkHref="#MJX-89-TEX-N-5D"></use>
                </g>
                <g data-mml-node="mo" transform="translate(3043.6, 0)">
                  <use xlinkHref="#MJX-89-TEX-N-3D"></use>
                </g>
                <g data-mml-node="msup" transform="translate(4099.3, 0)">
                  <g data-mml-node="mi">
                    <use xlinkHref="#MJX-89-TEX-I-58"></use>
                  </g>
                  <g
                    data-mml-node="TeXAtom"
                    transform="translate(828, 363) scale(0.707)"
                  >
                    <g data-mml-node="mi">
                      <use xlinkHref="#MJX-89-TEX-I-43"></use>
                    </g>
                    <g data-mml-node="mo" transform="translate(715, 0)">
                      <use xlinkHref="#MJX-89-TEX-N-5B"></use>
                    </g>
                    <g data-mml-node="mn" transform="translate(993, 0)">
                      <use xlinkHref="#MJX-89-TEX-N-32"></use>
                    </g>
                    <g data-mml-node="mo" transform="translate(1493, 0)">
                      <use xlinkHref="#MJX-89-TEX-N-5D"></use>
                    </g>
                  </g>
                </g>
                <g data-mml-node="msup" transform="translate(6229.6, 0)">
                  <g data-mml-node="mi">
                    <use xlinkHref="#MJX-89-TEX-I-5A"></use>
                  </g>
                  <g
                    data-mml-node="TeXAtom"
                    transform="translate(683, 363) scale(0.707)"
                  >
                    <g data-mml-node="mo">
                      <use xlinkHref="#MJX-89-TEX-N-2212"></use>
                    </g>
                    <g data-mml-node="mi" transform="translate(778, 0)">
                      <use xlinkHref="#MJX-89-TEX-I-43"></use>
                    </g>
                    <g data-mml-node="mo" transform="translate(1493, 0)">
                      <use xlinkHref="#MJX-89-TEX-N-5B"></use>
                    </g>
                    <g data-mml-node="mn" transform="translate(1771, 0)">
                      <use xlinkHref="#MJX-89-TEX-N-34"></use>
                    </g>
                    <g data-mml-node="mo" transform="translate(2271, 0)">
                      <use xlinkHref="#MJX-89-TEX-N-5D"></use>
                    </g>
                  </g>
                </g>
                <g data-mml-node="mo" transform="translate(8765, 0)">
                  <use xlinkHref="#MJX-89-TEX-N-2C"></use>
                </g>
              </g>
              <g data-mml-node="mtd" transform="translate(10043, 0)">
                <g data-mml-node="mo">
                  <use xlinkHref="#MJX-89-TEX-N-5B"></use>
                </g>
                <g data-mml-node="msub" transform="translate(278, 0)">
                  <g data-mml-node="mi">
                    <use xlinkHref="#MJX-89-TEX-I-61"></use>
                  </g>
                  <g
                    data-mml-node="mn"
                    transform="translate(529, -150) scale(0.707)"
                  >
                    <use xlinkHref="#MJX-89-TEX-N-31"></use>
                  </g>
                </g>
                <g data-mml-node="mo" transform="translate(1210.6, 0)">
                  <use xlinkHref="#MJX-89-TEX-N-2C"></use>
                </g>
                <g data-mml-node="msub" transform="translate(1655.2, 0)">
                  <g data-mml-node="mi">
                    <use xlinkHref="#MJX-89-TEX-I-62"></use>
                  </g>
                  <g
                    data-mml-node="mn"
                    transform="translate(429, -150) scale(0.707)"
                  >
                    <use xlinkHref="#MJX-89-TEX-N-32"></use>
                  </g>
                </g>
                <g data-mml-node="mo" transform="translate(2487.8, 0)">
                  <use xlinkHref="#MJX-89-TEX-N-5D"></use>
                </g>
                <g data-mml-node="mo" transform="translate(3043.6, 0)">
                  <use xlinkHref="#MJX-89-TEX-N-3D"></use>
                </g>
                <g data-mml-node="mi" transform="translate(4099.3, 0)">
                  <use xlinkHref="#MJX-89-TEX-I-58"></use>
                </g>
                <g data-mml-node="mo" transform="translate(4927.3, 0)">
                  <use xlinkHref="#MJX-89-TEX-N-2C"></use>
                </g>
              </g>
              <g data-mml-node="mtd" transform="translate(16248.4, 0)">
                <g data-mml-node="mo">
                  <use xlinkHref="#MJX-89-TEX-N-5B"></use>
                </g>
                <g data-mml-node="msub" transform="translate(278, 0)">
                  <g data-mml-node="mi">
                    <use xlinkHref="#MJX-89-TEX-I-61"></use>
                  </g>
                  <g
                    data-mml-node="mn"
                    transform="translate(529, -150) scale(0.707)"
                  >
                    <use xlinkHref="#MJX-89-TEX-N-31"></use>
                  </g>
                </g>
                <g data-mml-node="mo" transform="translate(1210.6, 0)">
                  <use xlinkHref="#MJX-89-TEX-N-2C"></use>
                </g>
                <g data-mml-node="msub" transform="translate(1655.2, 0)">
                  <g data-mml-node="mi">
                    <use xlinkHref="#MJX-89-TEX-I-62"></use>
                  </g>
                  <g
                    data-mml-node="mn"
                    transform="translate(429, -150) scale(0.707)"
                  >
                    <use xlinkHref="#MJX-89-TEX-N-33"></use>
                  </g>
                </g>
                <g data-mml-node="mo" transform="translate(2487.8, 0)">
                  <use xlinkHref="#MJX-89-TEX-N-5D"></use>
                </g>
                <g data-mml-node="mo" transform="translate(3043.6, 0)">
                  <use xlinkHref="#MJX-89-TEX-N-3D"></use>
                </g>
                <g data-mml-node="mi" transform="translate(4099.3, 0)">
                  <use xlinkHref="#MJX-89-TEX-I-59"></use>
                </g>
                <g data-mml-node="msup" transform="translate(4862.3, 0)">
                  <g data-mml-node="mi">
                    <use xlinkHref="#MJX-89-TEX-I-5A"></use>
                  </g>
                  <g
                    data-mml-node="TeXAtom"
                    transform="translate(683, 363) scale(0.707)"
                  >
                    <g data-mml-node="mo">
                      <use xlinkHref="#MJX-89-TEX-N-2212"></use>
                    </g>
                    <g data-mml-node="mi" transform="translate(778, 0)">
                      <use xlinkHref="#MJX-89-TEX-I-43"></use>
                    </g>
                    <g data-mml-node="mo" transform="translate(1493, 0)">
                      <use xlinkHref="#MJX-89-TEX-N-5B"></use>
                    </g>
                    <g data-mml-node="mn" transform="translate(1771, 0)">
                      <use xlinkHref="#MJX-89-TEX-N-33"></use>
                    </g>
                    <g data-mml-node="mo" transform="translate(2271, 0)">
                      <use xlinkHref="#MJX-89-TEX-N-5D"></use>
                    </g>
                  </g>
                </g>
                <g data-mml-node="msup" transform="translate(7397.7, 0)">
                  <g data-mml-node="mi">
                    <use xlinkHref="#MJX-89-TEX-I-58"></use>
                  </g>
                  <g
                    data-mml-node="TeXAtom"
                    transform="translate(828, 363) scale(0.707)"
                  >
                    <g data-mml-node="mi">
                      <use xlinkHref="#MJX-89-TEX-I-43"></use>
                    </g>
                    <g data-mml-node="mo" transform="translate(715, 0)">
                      <use xlinkHref="#MJX-89-TEX-N-5B"></use>
                    </g>
                    <g data-mml-node="mn" transform="translate(993, 0)">
                      <use xlinkHref="#MJX-89-TEX-N-31"></use>
                    </g>
                    <g data-mml-node="mo" transform="translate(1493, 0)">
                      <use xlinkHref="#MJX-89-TEX-N-5D"></use>
                    </g>
                  </g>
                </g>
              </g>
            </g>
            <g data-mml-node="mtr" transform="translate(0, -71.7)">
              <g data-mml-node="mtd" transform="translate(1918.9, 0)">
                <g data-mml-node="mo">
                  <use xlinkHref="#MJX-89-TEX-N-5B"></use>
                </g>
                <g data-mml-node="msub" transform="translate(278, 0)">
                  <g data-mml-node="mi">
                    <use xlinkHref="#MJX-89-TEX-I-61"></use>
                  </g>
                  <g
                    data-mml-node="mn"
                    transform="translate(529, -150) scale(0.707)"
                  >
                    <use xlinkHref="#MJX-89-TEX-N-32"></use>
                  </g>
                </g>
                <g data-mml-node="mo" transform="translate(1210.6, 0)">
                  <use xlinkHref="#MJX-89-TEX-N-2C"></use>
                </g>
                <g data-mml-node="msub" transform="translate(1655.2, 0)">
                  <g data-mml-node="mi">
                    <use xlinkHref="#MJX-89-TEX-I-62"></use>
                  </g>
                  <g
                    data-mml-node="mn"
                    transform="translate(429, -150) scale(0.707)"
                  >
                    <use xlinkHref="#MJX-89-TEX-N-31"></use>
                  </g>
                </g>
                <g data-mml-node="mo" transform="translate(2487.8, 0)">
                  <use xlinkHref="#MJX-89-TEX-N-5D"></use>
                </g>
                <g data-mml-node="mo" transform="translate(3043.6, 0)">
                  <use xlinkHref="#MJX-89-TEX-N-3D"></use>
                </g>
                <g data-mml-node="mi" transform="translate(4099.3, 0)">
                  <use xlinkHref="#MJX-89-TEX-I-58"></use>
                </g>
                <g data-mml-node="mo" transform="translate(4927.3, 0)">
                  <use xlinkHref="#MJX-89-TEX-N-2C"></use>
                </g>
              </g>
              <g data-mml-node="mtd" transform="translate(10115.5, 0)">
                <g data-mml-node="mo">
                  <use xlinkHref="#MJX-89-TEX-N-5B"></use>
                </g>
                <g data-mml-node="msub" transform="translate(278, 0)">
                  <g data-mml-node="mi">
                    <use xlinkHref="#MJX-89-TEX-I-61"></use>
                  </g>
                  <g
                    data-mml-node="mn"
                    transform="translate(529, -150) scale(0.707)"
                  >
                    <use xlinkHref="#MJX-89-TEX-N-32"></use>
                  </g>
                </g>
                <g data-mml-node="mo" transform="translate(1210.6, 0)">
                  <use xlinkHref="#MJX-89-TEX-N-2C"></use>
                </g>
                <g data-mml-node="msub" transform="translate(1655.2, 0)">
                  <g data-mml-node="mi">
                    <use xlinkHref="#MJX-89-TEX-I-62"></use>
                  </g>
                  <g
                    data-mml-node="mn"
                    transform="translate(429, -150) scale(0.707)"
                  >
                    <use xlinkHref="#MJX-89-TEX-N-32"></use>
                  </g>
                </g>
                <g data-mml-node="mo" transform="translate(2487.8, 0)">
                  <use xlinkHref="#MJX-89-TEX-N-5D"></use>
                </g>
                <g data-mml-node="mo" transform="translate(3043.6, 0)">
                  <use xlinkHref="#MJX-89-TEX-N-3D"></use>
                </g>
                <g data-mml-node="mi" transform="translate(4099.3, 0)">
                  <use xlinkHref="#MJX-89-TEX-I-5A"></use>
                </g>
                <g data-mml-node="mo" transform="translate(4782.3, 0)">
                  <use xlinkHref="#MJX-89-TEX-N-2C"></use>
                </g>
              </g>
              <g data-mml-node="mtd" transform="translate(21012.4, 0)"></g>
            </g>
            <g data-mml-node="mtr" transform="translate(0, -1366.3)">
              <g data-mml-node="mtd" transform="translate(1951.4, 0)">
                <g data-mml-node="mo">
                  <use xlinkHref="#MJX-89-TEX-N-5B"></use>
                </g>
                <g data-mml-node="msub" transform="translate(278, 0)">
                  <g data-mml-node="mi">
                    <use xlinkHref="#MJX-89-TEX-I-61"></use>
                  </g>
                  <g
                    data-mml-node="mn"
                    transform="translate(529, -150) scale(0.707)"
                  >
                    <use xlinkHref="#MJX-89-TEX-N-33"></use>
                  </g>
                </g>
                <g data-mml-node="mo" transform="translate(1210.6, 0)">
                  <use xlinkHref="#MJX-89-TEX-N-2C"></use>
                </g>
                <g data-mml-node="msub" transform="translate(1655.2, 0)">
                  <g data-mml-node="mi">
                    <use xlinkHref="#MJX-89-TEX-I-62"></use>
                  </g>
                  <g
                    data-mml-node="mn"
                    transform="translate(429, -150) scale(0.707)"
                  >
                    <use xlinkHref="#MJX-89-TEX-N-31"></use>
                  </g>
                </g>
                <g data-mml-node="mo" transform="translate(2487.8, 0)">
                  <use xlinkHref="#MJX-89-TEX-N-5D"></use>
                </g>
                <g data-mml-node="mo" transform="translate(3043.6, 0)">
                  <use xlinkHref="#MJX-89-TEX-N-3D"></use>
                </g>
                <g data-mml-node="mi" transform="translate(4099.3, 0)">
                  <use xlinkHref="#MJX-89-TEX-I-59"></use>
                </g>
                <g data-mml-node="mo" transform="translate(4862.3, 0)">
                  <use xlinkHref="#MJX-89-TEX-N-2C"></use>
                </g>
              </g>
              <g data-mml-node="mtd" transform="translate(12645.7, 0)"></g>
              <g data-mml-node="mtd" transform="translate(18548.7, 0)">
                <g data-mml-node="mo">
                  <use xlinkHref="#MJX-89-TEX-N-5B"></use>
                </g>
                <g data-mml-node="msub" transform="translate(278, 0)">
                  <g data-mml-node="mi">
                    <use xlinkHref="#MJX-89-TEX-I-61"></use>
                  </g>
                  <g
                    data-mml-node="mn"
                    transform="translate(529, -150) scale(0.707)"
                  >
                    <use xlinkHref="#MJX-89-TEX-N-33"></use>
                  </g>
                </g>
                <g data-mml-node="mo" transform="translate(1210.6, 0)">
                  <use xlinkHref="#MJX-89-TEX-N-2C"></use>
                </g>
                <g data-mml-node="msub" transform="translate(1655.2, 0)">
                  <g data-mml-node="mi">
                    <use xlinkHref="#MJX-89-TEX-I-62"></use>
                  </g>
                  <g
                    data-mml-node="mn"
                    transform="translate(429, -150) scale(0.707)"
                  >
                    <use xlinkHref="#MJX-89-TEX-N-33"></use>
                  </g>
                </g>
                <g data-mml-node="mo" transform="translate(2487.8, 0)">
                  <use xlinkHref="#MJX-89-TEX-N-5D"></use>
                </g>
                <g data-mml-node="mo" transform="translate(3043.6, 0)">
                  <use xlinkHref="#MJX-89-TEX-N-3D"></use>
                </g>
                <g data-mml-node="mi" transform="translate(4099.3, 0)">
                  <use xlinkHref="#MJX-89-TEX-I-58"></use>
                </g>
              </g>
            </g>
          </g>
          <g data-mml-node="TeXAtom" transform="translate(34333.6, 0)">
            <g data-mml-node="mo">
              <use xlinkHref="#MJX-89-TEX-S4-27E9"></use>
            </g>
          </g>
        </g>
      </g>
    </svg>
  );
}

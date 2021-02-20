import { memo } from 'react'

interface Props {
    width?: number
    height?: number
}

export default memo<Props>(({ height, width }) => {
    return (
        <svg xmlns="http://www.w3.org/2000/svg" width={width} height={height} viewBox="0 0 2124 660">
            <g stroke="none" strokeWidth="1" fill="none" fillRule="evenodd">
                <g transform="translate(30.000000, 30.000000)">
                    <g>
                        <circle fill="#1C68F3" cx="300" cy="300" r="300" />
                        <path
                            d="M480,230 L480,330 L180,330 L180,330.001 L167.092637,330.001293 C180.753837,390.677229 234.970343,436 299.772548,436 C353.346739,436 399.685718,405.022375 421.854746,360.001864 L421.854746,360.001864 L480,360.001 L480,444 C480,463.882251 463.882251,480 444,480 L156,480 C136.117749,480 120,463.882251 120,444 L120,230 L480,230 Z M387.326493,360.00167 C368.234736,387.914297 336.14276,406.231603 299.772548,406.231603 C263.402336,406.231603 231.31036,387.914297 212.218603,360.00167 L212.218603,360.00167 Z M223,254 C194.788109,254 171.448756,274.861818 167.567063,302.000334 L167.567063,302.000334 L198.253822,302.000543 C201.627886,291.555206 211.431636,284 223,284 C234.568364,284 244.372114,291.555206 247.746178,302.000543 L247.746178,302.000543 L278.432937,302.000334 C274.551244,274.861818 251.211891,254 223,254 Z M377,254 C348.788109,254 325.448756,274.861818 321.567063,302.000334 L321.567063,302.000334 L352.253822,302.000543 C355.627886,291.555206 365.431636,284 377,284 C388.568364,284 398.372114,291.555206 401.746178,302.000543 L401.746178,302.000543 L432.432937,302.000334 C428.551244,274.861818 405.211891,254 377,254 Z M444,120 C463.882251,120 480,136.117749 480,156 L480,200 L120,200 L120,156 C120,136.117749 136.117749,120 156,120 L444,120 Z"
                            fill="#FFFFFF"
                        />
                    </g>
                    <path
                        d="M1608.29336,217 C1662.77088,217 1724.6531,238.208577 1728.35546,306.076023 L1652.19272,306.076023 C1650.606,286.45809 1632.62313,277.444444 1608.82227,277.444444 C1586.60814,277.444444 1576.55889,285.927875 1576.55889,296.001949 C1576.55889,304.48538 1582.90578,312.438596 1603.00428,316.150097 L1651.1349,324.103314 C1699.26552,333.116959 1731,356.446394 1731,402.044834 C1731,461.42885 1677.5803,489 1610.9379,489 C1543.7666,489 1489.28908,460.898635 1484,392.500975 L1560.16274,393.031189 C1563.8651,415.300195 1582.37687,425.374269 1609.35118,425.374269 C1632.09422,425.374269 1645.84582,418.481481 1645.84582,407.346979 C1645.84582,398.863548 1637.91221,391.97076 1620.98715,389.319688 L1569.15418,380.306043 C1524.72591,372.883041 1494.04925,347.962963 1494.04925,302.894737 C1494.04925,248.812865 1540.06424,217 1608.29336,217 Z M1287.2444,218 C1315.22761,218 1338.45896,225.41502 1357.46642,237.596838 L1357.46642,223.826087 L1443,223.826087 L1443,480.703557 L1357.46642,480.703557 L1357.46642,466.403162 C1338.45896,478.58498 1315.22761,486 1287.2444,486 C1218.07836,486 1160,428.268775 1160,352 C1160,275.201581 1218.07836,218 1287.2444,218 Z M786.246594,120 L914.5,312.710294 L1042.22343,120 L1109,120 L1109,481 L1019.4346,481 L1019.4346,299.969118 L939.408719,423.664706 L939.408719,424.195588 L889.591281,424.195588 L889.591281,423.664706 L809.035422,298.907353 L809.565395,481 L720,481 L720,120 L786.246594,120 Z M1863.8,105 L1863.8,320.538028 L1953.30741,224.15493 L2055.52593,224.15493 L1958.07407,329.011268 L2064,481 L1961.25185,481 L1899.81481,392.030986 L1863.8,430.690141 L1863.8,481 L1778,481 L1778,105 L1863.8,105 Z M1304.13993,287.913043 C1269.29291,287.913043 1243.94963,316.513834 1243.94963,352 C1243.94963,387.486166 1269.29291,415.557312 1304.13993,415.557312 C1323.14739,415.557312 1341.62687,410.26087 1357.46642,391.72332 L1357.46642,312.27668 C1341.62687,293.73913 1323.14739,287.913043 1304.13993,287.913043 Z"
                        fill="#1C68F3"
                        fillRule="nonzero"
                    />
                </g>
            </g>
        </svg>
    )
})
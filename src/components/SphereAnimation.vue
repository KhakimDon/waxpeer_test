<script setup lang="ts">

</script>

<template>
     <div class="sphere">
        <span class="main-vector">
            <svg id="Ellipse151" width="134" height="212" viewBox="0 0 134 212" fill="none"
                xmlns="http://www.w3.org/2000/svg" style="width: 105%; max-height: 100%;">
                <path
                    d="M113.646 84.9744C126.592 113.519 133.043 141.726 133.025 164.243C133.007 186.807 126.503 203.46 113.781 209.23C101.059 215 84.2461 208.922 67.2585 194.07C50.3063 179.25 33.336 155.813 20.3901 127.269C7.44416 98.7243 0.992812 70.5175 1.01098 48.0002C1.02918 25.4358 7.53319 8.78321 20.255 3.01346C32.9768 -2.7563 49.7897 3.3213 66.7773 18.173C83.7295 32.9937 100.7 56.4298 113.646 84.9744Z"
                    stroke="#20CE70" stroke-width="0.947529" stroke-dasharray="0,0,0,535.0379638671875">
                    <animate attributeType="XML" attributeName="stroke-dasharray"  repeatCount="1" dur="10s" values="0,0,0,535.0379638671875; 
              0,267.51898193359375,267.51898193359375,0; 
              535.0379638671875,0,0,0" keyTimes="0; 0.5; 1" fill="freeze"></animate>
                </path>
            </svg>
        </span>
        <span class="second-vector">
            <svg id="Ellipse150" width="210" height="164" viewBox="0 0 201 164" fill="none"
                xmlns="http://www.w3.org/2000/svg" style="width: 150%; max-height: 100%;">
                <path
                    d="M125.811 114.997C99.1588 135.444 72.1742 150.201 50.1032 157.538C39.0654 161.207 29.2823 163.012 21.3969 162.76C13.507 162.509 7.59241 160.205 4.16803 155.742C0.743661 151.278 0.0498211 144.969 1.85042 137.283C3.65 129.601 7.92679 120.619 14.3293 110.908C27.1316 91.4904 48.3729 69.2479 75.0249 48.8004C101.677 28.3529 128.662 13.5965 150.733 6.25958C161.77 2.59039 171.553 0.785567 179.439 1.03665C187.329 1.28787 193.243 3.59202 196.668 8.05548C200.092 12.5189 200.786 18.8285 198.985 26.5142C197.186 34.1957 192.909 43.1776 186.507 52.8886C173.704 72.3067 152.463 94.5492 125.811 114.997Z"
                    stroke="#1C432E" stroke-opacity="0.5" stroke-width="0.947529"
                    stroke-dasharray="0,0,0,543.0690307617188">
                    <animate attributeType="XML" attributeName="stroke-dasharray" repeatCount="1" dur="10.5s" values="0,0,0,543.0690307617188; 
          0,271.5345153808594,271.5345153808594,0; 
          543.0690307617188,0,0,0" keyTimes="0; 0.5; 1" fill="freeze"></animate>
                </path>
            </svg>
        </span>
        <span class="third-vector">
            <!-- third vector  -->
            <svg id="Ellipse149" width="268" height="124" viewBox="0 0 268 124" fill="none"
                xmlns="http://www.w3.org/2000/svg" style="width: 160%; max-height: 100%;">
                <path
                    d="M147.33 24.9431C184.044 38.2642 215.731 54.5467 237.283 70.0925C248.061 77.8673 256.282 85.4416 261.333 92.3508C266.395 99.2765 268.199 105.426 266.387 110.419C264.576 115.411 259.249 118.974 250.923 121.042C242.617 123.105 231.452 123.645 218.195 122.699C191.689 120.808 156.933 112.982 120.219 99.6612C83.5056 86.3402 51.8183 70.0576 30.2664 54.5119C19.4878 46.7371 11.267 39.1628 6.2164 32.2536C1.15369 25.3279 -0.649323 19.1782 1.16214 14.1857C2.9736 9.19317 8.30058 5.63051 16.6265 3.56264C24.9325 1.49971 36.0976 0.95926 49.354 1.90523C75.8602 3.79668 110.616 11.6221 147.33 24.9431Z"
                    stroke="#207748" stroke-opacity="0.5" stroke-width="1"
                    stroke-dasharray="0,0,0,613.4288940429688">
                    <animate attributeType="XML" attributeName="stroke-dasharray" repeatCount="1" dur="4.5s" values="0,0,0,613.4288940429688; 
                      0,306.7144470214844,306.7144470214844,0; 
                      613.4288940429688,0,0,0" keyTimes="0; 0.5; 1" fill="freeze"></animate>
                </path>
            </svg>
        </span>
    </div>
</template>

<style scoped>
.sphere {
    transform: scale(1.1);
    width: max-content;
    position: absolute;
    height: 210px;
    right: -10%;
    width: 210px;
}

.sphere span {
    position: absolute;
    left: 44%;
    top: 49%;
    transform: translate(-50%, -50%);
}

.sphere .second-vector {
    left: 29%;
    top: 52%;
    transform: translate(-50%, -50%);
}
.sphere .third-vector {
    left: 25%;
    top: 53%;
    transform: translate(-50%, -50%);
}
</style>

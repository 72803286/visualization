{
    //柱状图配置选项
    let barChart = echarts.init(document.querySelector(".bar .chart"))
    let options = {
        // color设置我们线条的颜色 注意后面是个数组
        color: ['#2f89cf'],
        tooltip: {
            trigger: "axis",
            axisPointer: {
                // 坐标轴指示器，坐标轴触发有效
                type: "shadow" // 默认为直线，可选为：'line' | 'shadow'
            }
        },
        // 工具箱
        toolbox: {
            show: true,
            feature: {
                // saveAsImage:{}
            }
        },
        // 网格配置  grid可以控制线形图 柱状图 图表大小
        grid: {
            left: "0%",
            top: "10px",
            right: "0%",
            bottom: "4%",
            // 是否显示刻度标签 如果是true 就显示 否则反之
            containLabel: true
        },
        // 设置x轴的相关配置
        xAxis: [
            {
                type: 'category',
                // 是否让我们的线条和坐标轴有缝隙
                data: ['旅游', '教培', '游戏', '医疗', '电商', '社交', '金融'],
                axisTick: {
                    alignWithLabel: true
                },
                axisLabel: {
                    color: "rgba(255,255,255,.6)",
                    fontSize: "12"
                },
                axisLine: {
                    show: false
                }
            }],
        // 设置y轴的相关配置
        yAxis: [{
            type: 'value',
            axisLabel: {
                color: "rgba(255,255,255,.6)",
                fontSize: "12"
            },
            axisLine: {
                lineStyle: {
                    color: "rgba(255,255,255,.1)",
                    width: 2,
                    type: "solid"
                }
            },
            splitLine: {
                lineStyle: {
                    color: "rgba(255,255,255,.1)"
                }
            }
        }],
        // 系列图表配置 它决定着显示那种类型的图表
        series: [
            {
                name: '直接访问',
                type: 'bar',
                barWidth: "35%",
                itemStyle: {
                    barBorderRadius: 5
                },
                data: [200, 300, 300, 900, 1500, 1200, 600]
            }
        ]
    };
    barChart.setOption(options)
    window.addEventListener("resize", function () {
        barChart.resize();
    });
}


{
    //柱状图配置选项
    let barChart2 = echarts.init(document.querySelector(".bar2 .chart"))
    let colorArray = [
        {
            top: '#ffa800', //黄
            bottom: 'rgba(11,42,84,.3)'
        }, {
            top: '#1ace4a', //绿
            bottom: 'rgba(11,42,84, 0.3)'
        },
        {
            top: '#4bf3ff', //蓝
            bottom: 'rgba(11,42,84,.3)'
        }, {
            top: '#4f9aff', //深蓝
            bottom: 'rgba(11,42,84,.3)'
        },
        {
            top: '#b250ff', //粉
            bottom: 'rgba(11,42,84,.3)'
        }]
    option = {
        grid: {
            left: '22%',
            bottom: '10%',
            top: "10%",
            //   containLabel: true
        },
        xAxis: {
            show: false
        },
        yAxis: [
            {
                type: 'category',
                inverse: true,
                axisLine: {
                    show: false
                },
                axisTick: {
                    show: false
                },
                axisLabel: {
                    color: "white",
                    fontSize: "12"
                },
                data: ["HTML5", "CSS3", "javascript", "VUE", "NODE"]
            },
            {
                type: 'category',
                inverse: true,
                axisLine: {
                    show: false
                },
                axisTick: {
                    show: false
                },
                axisLabel: {
                    color: "white",
                    fontSize: "12"
                },
                data: [702, 350, 610, 793, 664]
            }],
        series: [
            {
                name: '条',
                type: 'bar',
                data: [70, 34, 60, 78, 69],
                yAxisIndex: 0,
                barCategoryGap: 50,
                barWidth: 10,
                itemStyle: {
                    barBorderRadius: 20,
                    color: function (params) {
                        let num = colorArray.length;
                        return {
                            type: 'linear',
                            colorStops: [{
                                offset: 0,
                                color: colorArray[params.dataIndex % num].bottom
                            }, {
                                offset: 1,
                                color: colorArray[params.dataIndex % num].top
                            }, {
                                offset: 0,
                                color: colorArray[params.dataIndex % num].bottom
                            }, {
                                offset: 1,
                                color: colorArray[params.dataIndex % num].top
                            }, {
                                offset: 0,
                                color: colorArray[params.dataIndex % num].bottom
                            }, {
                                offset: 1,
                                color: colorArray[params.dataIndex % num].top
                            }, {
                                offset: 0,
                                color: colorArray[params.dataIndex % num].bottom
                            }, {
                                offset: 1,
                                color: colorArray[params.dataIndex % num].top
                            }, {
                                offset: 0,
                                color: colorArray[params.dataIndex % num].bottom
                            }, {
                                offset: 1,
                                color: colorArray[params.dataIndex % num].top
                            }, {
                                offset: 0,
                                color: colorArray[params.dataIndex % num].bottom
                            }, {
                                offset: 1,
                                color: colorArray[params.dataIndex % num].top
                            }],
                            //globalCoord: false
                        }
                    }
                },
                label: {
                    show: true,
                    // 图形内显示
                    position: "inside",
                    // 文字的显示格式
                    formatter: "{c}%"
                },
            },
            {
                name: '框',
                type: 'bar',
                barCategoryGap: 50,
                barWidth: 15,
                yAxisIndex: 1,
                data: [100, 100, 100, 100, 100],
                itemStyle: {
                    color: "none",
                    barBorderRadius: 15,
                    borderWidth: 3,
                    borderColor: '#00c1de'
                }
            }
        ]
    };
    barChart2.setOption(option)
    window.addEventListener("resize", function () {
        barChart2.resize();
    });
}

{
    //折线图1
    let lineChart = echarts.init(document.querySelector(".line .chart"))
    let yearData = [
        {
            year: "2020", // 年份
            data: [
                // 两个数组是因为有两条线
                [24, 40, 101, 134, 90, 230, 210, 230, 120, 230, 210, 120],
                [40, 64, 191, 324, 290, 330, 310, 213, 180, 200, 180, 79]
            ]
        },
        {
            year: "2021", // 年份
            data: [
                // 两个数组是因为有两条线
                [123, 175, 112, 197, 121, 67, 98, 21, 43, 64, 76, 38],
                [143, 131, 165, 123, 178, 21, 82, 64, 43, 60, 19, 34]
            ]
        }
    ];
    let option = {
        color: ["#00f2f1", "#ed3f35"],
        textStyle: {
            color: "#4c9bfd",
        },
        tooltip: {
            trigger: 'axis'
        },
        legend: {
            textStyle: {
                color: 'rgba(255,255,255,.5)',
                fontSize: '12'
            },
            right: '8%'
        },
        grid: {
            top: '15%',
            left: '3%',
            right: '4%',
            bottom: '3%',
            containLabel: true,
            show: true,
            borderColor: "#012f4a"
        },
        xAxis: {
            type: 'category',
            boundaryGap: false,
            axisLine: {
                show: false
            },
            axisTick: {
                show: false
            },
            axisLabel: {
                color: "#4c9bfd"
            },
            data: [
                "1月",
                "2月",
                "3月",
                "4月",
                "5月",
                "6月",
                "7月",
                "8月",
                "9月",
                "10月",
                "11月",
                "12月"
            ],
        },
        yAxis: {
            type: 'value',
            axisLine: {
                show: false
            },
            axisTick: {
                show: false
            },
            splitLine: {
                lineStyle: {
                    color: '#012f4a'
                }
            }
        },
        series: [
            {
                name: '新增粉丝',
                type: 'line',
                data: yearData[0].data[0],
                smooth: true
            },
            {
                name: '新增游客',
                type: 'line',
                data: yearData[0].data[1],
                smooth: true
            }
        ]
    }
    lineChart.setOption(option)
    window.addEventListener("resize", function () {
        lineChart.resize();
    });


    $('.line h2').on('click', 'a', function () {
        let num = $(this).index()
        option.series[0].data = yearData[num].data[0]
        option.series[1].data = yearData[num].data[1]
        lineChart.setOption(option)
    })
}


{
    //折线图2
    let lineChart2 = echarts.init(document.querySelector(".line2 .chart"))
    option = {
        textStyle: {
            color: '#4c9bfd'
        },
        tooltip: {
            trigger: 'axis',
        },
        legend: {
            top: '5%',
            right: '8%',
            textStyle: {
                color: 'rgba(255,255,255,.5)',
                fontSize: '12'
            }
        },
        grid: {
            left: '3%',
            right: '4%',
            bottom: '0%',
            top: '20%',
            containLabel: true,
        },
        xAxis: [
            {
                type: 'category',
                boundaryGap: false,
                data: ["01",
                    "02",
                    "03",
                    "04",
                    "05",
                    "06",
                    "07",
                    "08",
                    "09",
                    "10",
                    "11",
                    "12",
                    "13",
                    "14",
                    "15",
                    "16",
                    "17",
                    "18",
                    "19",
                    "20",
                    "21",
                    "22",
                    "23",
                    "24",
                    "25",
                    "26",
                    "26",
                    "28",
                    "29",
                    "30"],
                axisLabel: {
                    textStyle: {
                        color: 'rgba(255,255,255,.6)',
                        fontSize: 12
                    }
                },
                axisLine: {
                    lineStyle: {
                        color: 'rgba(255,255,255,.2)'
                    }
                }
            }
        ],
        yAxis: [
            {
                type: 'value',
                axisLabel: {
                    textStyle: {
                        color: 'rgba(255,255,255,.6)',
                        fontSize: 12
                    }
                },
                axisLine: {
                    lineStyle: {
                        color: 'rgba(255,255,255,.2)'
                    }
                },
                axisTick: {
                    show: false
                },
                splitLine: {
                    lineStyle: {
                        color: "rgba(255,255,255,.1)"
                    }
                }
            }
        ],
        series: [
            {
                name: '邮件营销',
                type: 'line',
                smooth: true,

                //单独修改线条的样式，包括颜色，宽度
                lineStyle: {
                    width: 2,
                    color: "#0184d5",
                },

                //拐点形状
                symbol: "circle",
                //控制是否显示拐点
                showSymbol: false,
                //拐点样式
                itemStyle: {
                    color: "#0184d5",
                    borderColor: "rgba(221, 220, 107, .2)",
                    borderWidth: 12
                },

                //填充颜色设置
                areaStyle: {
                    color: new echarts.graphic.LinearGradient(0, 0, 0, 1, [
                        {
                            offset: 0,
                            //渐变初始颜色
                            color: "rgba(1, 132, 213, 0.4)"
                        },
                        {
                            offset: 0.8,
                            //渐变结束颜色
                            color: "rgba(1, 132, 213, 0.1)"
                        },
                    ])
                },
                data: [30,
                    40,
                    30,
                    40,
                    30,
                    40,
                    30,
                    60,
                    20,
                    40,
                    30,
                    40,
                    30,
                    40,
                    30,
                    40,
                    30,
                    60,
                    20,
                    40,
                    30,
                    40,
                    30,
                    40,
                    30,
                    40,
                    20,
                    60,
                    50,
                    40]
            },
            {
                name: '联盟广告',
                type: 'line',
                smooth: true,
                lineStyle: {
                    width: 2
                },
                symbol: "circle",
                showSymbol: false,
                itemStyle: {
                    color: '#00d887',
                    borderColor: "rgba(221, 220, 107, .2)",
                    borderWidth: 12
                },
                areaStyle: {
                    color: new echarts.graphic.LinearGradient(0, 0, 0, 1, [
                        {
                            offset: 0,
                            color: "rgba(0, 216, 135, 0.4)"
                        },
                        {
                            offset: 0.8,
                            color: "rgba(0, 216, 135, 0.1)"
                        }
                    ])
                },
                data: [130,
                    10,
                    20,
                    40,
                    30,
                    40,
                    80,
                    60,
                    20,
                    40,
                    90,
                    40,
                    20,
                    140,
                    30,
                    40,
                    130,
                    20,
                    20,
                    40,
                    80,
                    70,
                    30,
                    40,
                    30,
                    120,
                    20,
                    99,
                    50,
                    20]
            },
        ]
    };
    lineChart2.setOption(option)
    window.addEventListener("resize", function () {
        lineChart2.resize();
    });
}

{

    //饼图1
    let pieChart = echarts.init(document.querySelector(".pie .chart"))
    let option = {
        tooltip: {
            trigger: 'item',
            formatter: '{a} <br/>{b} : {c} ({d}%)'
        },
        legend: {
            top: 'center',
            left: '5%',
            orient: 'vertical',
            //   图例文字的样式
            textStyle: {
                color: 'rgba(255,255,255,.6)',
                fontSize: 12
            },

            //修改图例大小
            itemWidth: 15,
            itemHeigth: 15,
        },
        series: [
            {
                name: '年龄分布',
                type: 'pie',
                //控制饼图的大小，数组内第一个数据为内圈大小，第二个数值为外圈大小
                radius: ['40%', '70%'],
                avoidLabelOverlap: false,
                // 设置饼图的位置
                center: ['55%', '50%'],
                //图形对应的文字
                label: {
                    show: false,
                    position: 'center'
                },
                // 链接图形与文字的线
                labelLine: {
                    show: false
                },
                emphasis: {
                    label: {
                        show: false,
                    },
                    itemStyle: {
                        shadowBlur: 10,
                        shadowOffsetX: 0,
                        shadowColor: 'rgba(0, 0, 0, 0.5)'
                    }
                },
                data: [
                    { value: 1048, name: '0岁以下' },
                    { value: 735, name: '20-29岁' },
                    { value: 580, name: '30-39岁' },
                    { value: 484, name: '40-49岁' },
                    { value: 300, name: '50岁以上' }
                ],
            }
        ]
    };
    pieChart.setOption(option)
    window.addEventListener("resize", function () {
        pieChart.resize();
    });
}

{

    //饼图2
    let pieChart2 = echarts.init(document.querySelector(".pie2 .chart"))
    let areaList = ['云南', '北京', '山东', '河北', '江苏', '浙江', '四川', '湖北']
    let option = {
        legend: {
            top: 'center',
            itemHeigth: 15,
            itemWidth: 15,
            orient: 'vertical',
            left: '5%',
            textStyle: {
                color: 'rgba(255,255,255,.6)',
                fontSize: 12
            }
        },
        tooltip: {
            trigger: 'item',
            formatter: "{a} </br> {b}:{c} ({d})"
        },
        series: {
            name: '地区分布',
            type: 'pie',
            radius: ['20%', '90%'],
            center: ['50%', '60%'],
            roseType: 'area',
            itemStyle: {
                borderRadius: 8
            },
            label: {
                fontSize: 10
            },
            labelLine: {
                length: 2
            },
            data: [
                { value: 40, name: '' },
                { value: 38, name: '' },
                { value: 32, name: '' },
                { value: 30, name: '' },
                { value: 28, name: '' },
                { value: 26, name: '' },
                { value: 22, name: '' },
                { value: 68, name: '' }
            ]
        }
    };
    option.series.data.forEach((e, i) => {
        e.name = areaList[i]
    });
    pieChart2.setOption(option)
    window.addEventListener("resize", function () {
        pieChart2.resize();
    });
}

{
    let mapChart = echarts.init(document.querySelector(".map .chart"))
    let geoCoordMap = {
        上海: [121.4648, 31.2891],
        东莞: [113.8953, 22.901],
        东营: [118.7073, 37.5513],
        中山: [113.4229, 22.478],
        临汾: [111.4783, 36.1615],
        临沂: [118.3118, 35.2936],
        丹东: [124.541, 40.4242],
        丽水: [119.5642, 28.1854],
        乌鲁木齐: [87.9236, 43.5883],
        佛山: [112.8955, 23.1097],
        保定: [115.0488, 39.0948],
        兰州: [103.5901, 36.3043],
        包头: [110.3467, 41.4899],
        北京: [116.4551, 40.2539],
        北海: [109.314, 21.6211],
        南京: [118.8062, 31.9208],
        南宁: [108.479, 23.1152],
        南昌: [116.0046, 28.6633],
        南通: [121.1023, 32.1625],
        厦门: [118.1689, 24.6478],
        台州: [121.1353, 28.6688],
        合肥: [117.29, 32.0581],
        呼和浩特: [111.4124, 40.4901],
        咸阳: [108.4131, 34.8706],
        哈尔滨: [127.9688, 45.368],
        唐山: [118.4766, 39.6826],
        嘉兴: [120.9155, 30.6354],
        大同: [113.7854, 39.8035],
        大连: [122.2229, 39.4409],
        天津: [117.4219, 39.4189],
        太原: [112.3352, 37.9413],
        威海: [121.9482, 37.1393],
        宁波: [121.5967, 29.6466],
        宝鸡: [107.1826, 34.3433],
        宿迁: [118.5535, 33.7775],
        常州: [119.4543, 31.5582],
        广州: [113.5107, 23.2196],
        廊坊: [116.521, 39.0509],
        延安: [109.1052, 36.4252],
        张家口: [115.1477, 40.8527],
        徐州: [117.5208, 34.3268],
        德州: [116.6858, 37.2107],
        惠州: [114.6204, 23.1647],
        成都: [103.9526, 30.7617],
        扬州: [119.4653, 32.8162],
        承德: [117.5757, 41.4075],
        拉萨: [91.1865, 30.1465],
        无锡: [120.3442, 31.5527],
        日照: [119.2786, 35.5023],
        昆明: [102.9199, 25.4663],
        杭州: [119.5313, 29.8773],
        枣庄: [117.323, 34.8926],
        柳州: [109.3799, 24.9774],
        株洲: [113.5327, 27.0319],
        武汉: [114.3896, 30.6628],
        汕头: [117.1692, 23.3405],
        江门: [112.6318, 22.1484],
        沈阳: [123.1238, 42.1216],
        沧州: [116.8286, 38.2104],
        河源: [114.917, 23.9722],
        泉州: [118.3228, 25.1147],
        泰安: [117.0264, 36.0516],
        泰州: [120.0586, 32.5525],
        济南: [117.1582, 36.8701],
        济宁: [116.8286, 35.3375],
        海口: [110.3893, 19.8516],
        淄博: [118.0371, 36.6064],
        淮安: [118.927, 33.4039],
        深圳: [114.5435, 22.5439],
        清远: [112.9175, 24.3292],
        温州: [120.498, 27.8119],
        渭南: [109.7864, 35.0299],
        湖州: [119.8608, 30.7782],
        湘潭: [112.5439, 27.7075],
        滨州: [117.8174, 37.4963],
        潍坊: [119.0918, 36.524],
        烟台: [120.7397, 37.5128],
        玉溪: [101.9312, 23.8898],
        珠海: [113.7305, 22.1155],
        盐城: [120.2234, 33.5577],
        盘锦: [121.9482, 41.0449],
        石家庄: [114.4995, 38.1006],
        福州: [119.4543, 25.9222],
        秦皇岛: [119.2126, 40.0232],
        绍兴: [120.564, 29.7565],
        聊城: [115.9167, 36.4032],
        肇庆: [112.1265, 23.5822],
        舟山: [122.2559, 30.2234],
        苏州: [120.6519, 31.3989],
        莱芜: [117.6526, 36.2714],
        菏泽: [115.6201, 35.2057],
        营口: [122.4316, 40.4297],
        葫芦岛: [120.1575, 40.578],
        衡水: [115.8838, 37.7161],
        衢州: [118.6853, 28.8666],
        西宁: [101.4038, 36.8207],
        西安: [109.1162, 34.2004],
        贵阳: [106.6992, 26.7682],
        连云港: [119.1248, 34.552],
        邢台: [114.8071, 37.2821],
        邯郸: [114.4775, 36.535],
        郑州: [113.4668, 34.6234],
        鄂尔多斯: [108.9734, 39.2487],
        重庆: [107.7539, 30.1904],
        金华: [120.0037, 29.1028],
        铜川: [109.0393, 35.1947],
        银川: [106.3586, 38.1775],
        镇江: [119.4763, 31.9702],
        长春: [125.8154, 44.2584],
        长沙: [113.0823, 28.2568],
        长治: [112.8625, 36.4746],
        阳泉: [113.4778, 38.0951],
        青岛: [120.4651, 36.3373],
        韶关: [113.7964, 24.7028]
    };

    let XAData = [
        [{ name: "西安" }, { name: "拉萨", value: 100 }],
        [{ name: "西安" }, { name: "上海", value: 100 }],
        [{ name: "西安" }, { name: "广州", value: 100 }],
        [{ name: "西安" }, { name: "西宁", value: 100 }],
        [{ name: "西安" }, { name: "银川", value: 100 }]
    ];

    let XNData = [
        [{ name: "西宁" }, { name: "北京", value: 100 }],
        [{ name: "西宁" }, { name: "上海", value: 100 }],
        [{ name: "西宁" }, { name: "广州", value: 100 }],
        [{ name: "西宁" }, { name: "西安", value: 100 }],
        [{ name: "西宁" }, { name: "银川", value: 100 }]
    ];

    let YCData = [
        [{ name: "拉萨" }, { name: "潍坊", value: 100 }],
        [{ name: "拉萨" }, { name: "哈尔滨", value: 100 }],
        [{ name: "银川" }, { name: "上海", value: 100 }],
        [{ name: "银川" }, { name: "西安", value: 100 }],
        [{ name: "银川" }, { name: "西宁", value: 100 }]
    ];

    let planePath =
        "path://M1705.06,1318.313v-89.254l-319.9-221.799l0.073-208.063c0.521-84.662-26.629-121.796-63.961-121.491c-37.332-0.305-64.482,36.829-63.961,121.491l0.073,208.063l-319.9,221.799v89.254l330.343-157.288l12.238,241.308l-134.449,92.931l0.531,42.034l175.125-42.917l175.125,42.917l0.531-42.034l-134.449-92.931l12.238-241.308L1705.06,1318.313z";
    //let planePath = 'arrow';
    let convertData = function (data) {
        let res = [];
        for (let i = 0; i < data.length; i++) {
            let dataItem = data[i];

            let fromCoord = geoCoordMap[dataItem[0].name];
            let toCoord = geoCoordMap[dataItem[1].name];
            if (fromCoord && toCoord) {
                res.push({
                    fromName: dataItem[0].name,
                    toName: dataItem[1].name,
                    coords: [fromCoord, toCoord],
                    value: dataItem[1].value
                });
            }
        }
        return res;
    };

    let color = ["#a6c84c", "#ffa022", "#46bee9"]; //航线的颜色
    let series = [];
    [
        ["西安", XAData],
        ["西宁", XNData],
        ["银川", YCData]
    ].forEach(function (item, i) {
        series.push(
            {
                name: item[0] + " Top3",
                type: "lines",
                zlevel: 1,
                effect: {
                    show: true,
                    period: 6,
                    trailLength: 0.7,
                    color: "red", //arrow箭头的颜色
                    symbolSize: 3
                },
                lineStyle: {
                    normal: {
                        color: color[i],
                        width: 0,
                        curveness: 0.2
                    }
                },
                data: convertData(item[1])
            },
            {
                name: item[0] + " Top3",
                type: "lines",
                zlevel: 2,
                symbol: ["none", "arrow"],
                symbolSize: 10,
                effect: {
                    show: true,
                    period: 6,
                    trailLength: 0,
                    symbol: planePath,
                    symbolSize: 15
                },
                lineStyle: {
                    normal: {
                        color: color[i],
                        width: 1,
                        opacity: 0.6,
                        curveness: 0.2
                    }
                },
                data: convertData(item[1])
            },
            {
                name: item[0] + " Top3",
                type: "effectScatter",
                coordinateSystem: "geo",
                zlevel: 2,
                rippleEffect: {
                    brushType: "stroke"
                },
                label: {
                    normal: {
                        show: true,
                        position: "right",
                        formatter: "{b}"
                    }
                },
                symbolSize: function (val) {
                    return val[2] / 8;
                },
                itemStyle: {
                    normal: {
                        color: color[i]
                    },
                    emphasis: {
                        areaColor: "#2B91B7"
                    }
                },
                data: item[1].map(function (dataItem) {
                    return {
                        name: dataItem[1].name,
                        value: geoCoordMap[dataItem[1].name].concat([dataItem[1].value])
                    };
                })
            }
        );
    });
    let option = {
        tooltip: {
            trigger: "item",
            formatter: function (params, ticket, callback) {
                if (params.seriesType == "effectScatter") {
                    return "线路：" + params.data.name + "" + params.data.value[2];
                } else if (params.seriesType == "lines") {
                    return (
                        params.data.fromName +
                        ">" +
                        params.data.toName +
                        "<br />" +
                        params.data.value
                    );
                } else {
                    return params.name;
                }
            }
        },
        legend: {
            orient: "vertical",
            top: "bottom",
            left: "right",
            data: ["西安 Top3", "西宁 Top3", "银川 Top3"],
            textStyle: {
                color: "#fff"
            },
            selectedMode: "multiple"
        },
        geo: {
            map: "china",
            label: {
                emphasis: {
                    show: true,
                    color: "#fff"
                }
            },
            // 把中国地图放大了1.2倍
            zoom: 1.2,
            roam: true,
            itemStyle: {
                normal: {
                    // 地图省份的背景颜色
                    areaColor: "rgba(20, 41, 87,0.6)",
                    borderColor: "#195BB9",
                    borderWidth: 1
                },
                emphasis: {
                    areaColor: "#2B91B7"
                }
            }
        },
        series: series
    };
    mapChart.setOption(option)
    window.addEventListener("resize", function () {
        mapChart.resize();
    });
}
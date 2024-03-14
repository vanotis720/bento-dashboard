window.addEventListener('load', () => {
    (function () {
        buildChart('#hs-single-bar-chart', (mode) => ({
            chart: {
                type: 'bar',
                height: '90%',
                toolbar: {
                    show: false
                },
                zoom: {
                    enabled: false
                }
            },
            series: [
                {
                    name: 'Sales',
                    data: [23000, 44000, 55000, 57000, 80000, 161000, 158000, 125000, 50000, 46000, 34000, 25000]
                }
            ],
            plotOptions: {
                bar: {
                    horizontal: false,
                    columnWidth: '60px',
                    borderRadius: 40
                }
            },
            legend: {
                show: false
            },
            dataLabels: {
                enabled: false
            },
            stroke: {
                show: true,
                width: 8,
                colors: ['transparent']
            },
            xaxis: {
                categories: [
                    'January',
                    'February',
                    'March',
                    'April',
                    'May',
                    'June',
                    'July',
                    'August',
                    'September',
                    'October',
                    'November',
                    'December'
                ],
                axisBorder: {
                    show: false
                },
                axisTicks: {
                    show: false
                },
                crosshairs: {
                    show: false
                },
                labels: {
                    style: {
                        colors: '#9ca3af',
                        fontSize: '13px',
                        fontFamily: 'Inter, ui-sans-serif',
                        fontWeight: 400
                    },
                    offsetX: -2,
                    formatter: (title) => title.slice(0, 3)
                }
            },
            yaxis: {
                labels: {
                    align: 'left',
                    minWidth: 0,
                    maxWidth: 140,
                    style: {
                        colors: '#9ca3af',
                        fontSize: '13px',
                        fontFamily: 'Inter, ui-sans-serif',
                        fontWeight: 400
                    },
                    formatter: (value) => value >= 1000 ? `${value / 1000}k` : value
                }
            },
            states: {
                hover: {
                    filter: {
                        type: 'darken',
                        value: 0.9
                    }
                }
            },
            tooltip: {
                y: {
                    formatter: (value) => `$${value >= 1000 ? `${value / 1000}k` : value}`
                },
                custom: function (props) {
                    const { categories } = props.ctx.opts.xaxis;
                    const { dataPointIndex } = props;
                    const title = categories[dataPointIndex];
                    const newTitle = `${title}`;

                    return buildTooltip(props, {
                        title: newTitle,
                        mode,
                        hasTextLabel: true,
                        wrapperExtClasses: 'min-w-28',
                        labelDivider: ':',
                        labelExtClasses: 'ms-2'
                    });
                }
            },
            responsive: [{
                breakpoint: 568,
                options: {
                    chart: {
                        height: 300
                    },
                    plotOptions: {
                        bar: {
                            columnWidth: '14px'
                        }
                    },
                    stroke: {
                        width: 8
                    },
                    labels: {
                        style: {
                            colors: '#9ca3af',
                            fontSize: '11px',
                            fontFamily: 'Inter, ui-sans-serif',
                            fontWeight: 400
                        },
                        offsetX: -2,
                        formatter: (title) => title.slice(0, 3)
                    },
                    yaxis: {
                        labels: {
                            align: 'left',
                            minWidth: 0,
                            maxWidth: 140,
                            style: {
                                colors: '#9ca3af',
                                fontSize: '11px',
                                fontFamily: 'Inter, ui-sans-serif',
                                fontWeight: 400
                            },
                            formatter: (value) => value >= 1000 ? `${value / 1000}k` : value
                        }
                    },
                },
            }]
        }), {
            colors: ['#2563eb', '#d1d5db'],
            grid: {
                borderColor: '#e5e7eb'
            }
        }, {
            colors: ['#3b82f6', '#2563eb'],
            grid: {
                borderColor: '#374151'
            }
        });
    })();

    (function () {
        buildChart('#hs-doughnut-chart', () => ({
            chart: {
                height: '60%',
                // width: 230,
                type: 'donut',
                zoom: {
                    enabled: false
                }
            },
            plotOptions: {
                pie: {
                    donut: {
                        size: '50%',
                    }
                }
            },
            series: [47, 23, 30],
            labels: ['Tailwind CSS', 'Preline UI', 'Others'],
            legend: {
                show: false
            },
            dataLabels: {
                enabled: false
            },
            stroke: {
                width: 5
            },
            grid: {
                padding: {
                    top: -12,
                    bottom: -11,
                    left: -12,
                    right: -12
                }
            },
            states: {
                hover: {
                    filter: {
                        type: 'none'
                    }
                }
            }
        }), {
            colors: ['#3b82f6', '#22d3ee', '#e5e7eb'],
            stroke: {
                colors: ['rgb(255, 255, 255)']
            }
        }, {
            colors: ['#e5e7eb', '#3b82f6', '#22d3ee'],
            stroke: {
                colors: ['rgb(38, 38, 38)']
            }
        });
    })();

    (function () {
        buildChart('#hs-curved-area-charts', (mode) => ({
            chart: {
                height: '70%',
                type: 'area',
                toolbar: {
                    show: false
                },
                zoom: {
                    enabled: false
                }
            },
            series: [
                {
                    name: 'Income',
                    data: [18000, 51000, 60000, 38000, 88000, 50000, 40000, 52000, 88000, 80000, 60000, 70000]
                },
                {
                    name: 'Outcome',
                    data: [27000, 38000, 60000, 77000, 40000, 50000, 49000, 29000, 42000, 27000, 42000, 50000]
                }
            ],
            legend: {
                show: false
            },
            dataLabels: {
                enabled: false
            },
            stroke: {
                curve: 'smooth',
                width: 2
            },
            grid: {
                strokeDashArray: 2
            },
            fill: {
                type: 'gradient',
                gradient: {
                    type: 'vertical',
                    shadeIntensity: 1,
                    opacityFrom: 0.1,
                    opacityTo: 0.8
                }
            },
            xaxis: {
                type: 'category',
                tickPlacement: 'on',
                categories: [
                    '25 January 2023',
                    '26 January 2023',
                    '27 January 2023',
                    '28 January 2023',
                    '29 January 2023',
                    '30 January 2023',
                    '31 January 2023',
                    '1 February 2023',
                    '2 February 2023',
                    '3 February 2023',
                    '4 February 2023',
                    '5 February 2023'
                ],
                axisBorder: {
                    show: false
                },
                axisTicks: {
                    show: false
                },
                crosshairs: {
                    stroke: {
                        dashArray: 0
                    },
                    dropShadow: {
                        show: false
                    }
                },
                tooltip: {
                    enabled: false
                },
                labels: {
                    style: {
                        colors: '#9ca3af',
                        fontSize: '13px',
                        fontFamily: 'Inter, ui-sans-serif',
                        fontWeight: 400
                    },
                    formatter: (title) => {
                        let t = title;

                        if (t) {
                            const newT = t.split(' ');
                            t = `${newT[0]} ${newT[1].slice(0, 3)}`;
                        }

                        return t;
                    }
                }
            },
            yaxis: {
                show: false,
                labels: {
                    align: 'left',
                    minWidth: 0,
                    maxWidth: 140,
                    style: {
                        colors: '#9ca3af',
                        fontSize: '13px',
                        fontFamily: 'Inter, ui-sans-serif',
                        fontWeight: 400
                    },
                    formatter: (value) => value >= 1000 ? `${value / 1000}k` : value
                }
            },
            tooltip: {
                x: {
                    format: 'MMMM yyyy'
                },
                y: {
                    formatter: (value) => `$${value >= 1000 ? `${value / 1000}k` : value}`
                },
                custom: function (props) {
                    const { categories } = props.ctx.opts.xaxis;
                    const { dataPointIndex } = props;
                    const title = categories[dataPointIndex].split(' ');
                    const newTitle = `${title[0]} ${title[1]}`;

                    return buildTooltip(props, {
                        title: newTitle,
                        mode,
                        hasTextLabel: true,
                        wrapperExtClasses: 'min-w-28',
                        labelDivider: ':',
                        labelExtClasses: 'ms-2'
                    });
                }
            },
            responsive: [{
                breakpoint: 568,
                options: {
                    chart: {
                        height: 300
                    },
                    labels: {
                        style: {
                            colors: '#9ca3af',
                            fontSize: '11px',
                            fontFamily: 'Inter, ui-sans-serif',
                            fontWeight: 400
                        },
                        offsetX: -2,
                        formatter: (title) => title.slice(0, 3)
                    },
                    yaxis: {
                        labels: {
                            align: 'left',
                            minWidth: 0,
                            maxWidth: 140,
                            style: {
                                colors: '#9ca3af',
                                fontSize: '11px',
                                fontFamily: 'Inter, ui-sans-serif',
                                fontWeight: 400
                            },
                            formatter: (value) => value >= 1000 ? `${value / 1000}k` : value
                        }
                    },
                },
            }]
        }), {
            colors: ['#2563eb', '#9333ea'],
            fill: {
                gradient: {
                    stops: [0, 90, 100]
                }
            },
            grid: {
                borderColor: '#e5e7eb'
            }
        }, {
            colors: ['#3b82f6', '#a855f7'],
            fill: {
                gradient: {
                    stops: [100, 90, 0]
                }
            },
            grid: {
                borderColor: '#374151'
            }
        });
    })();

    (function () {
        buildChart('#hs-bubble-chart', () => ({
            chart: {
                height: '100%',
                type: 'bubble',
                toolbar: {
                    show: false
                },
                zoom: {
                    enabled: false
                }
            },
            series: [
                { data: [[5, 6, 70]] },
                { data: [[8, 4, 45]] },
                { data: [[10, 9, 90]] }
            ],
            dataLabels: {
                style: {
                    fontSize: '20px',
                    fontFamily: 'Inter, ui-sans-serif',
                    fontWeight: '400',
                    colors: ['#fff', '#1f2937', '#fff']
                },
                formatter: (value) => value ? `${value}%` : ''
            },
            fill: {
                opacity: 1
            },
            legend: {
                show: false
            },
            stroke: {
                width: 5
            },
            plotOptions: {
                bubble: {
                    zScaling: false,
                    minBubbleRadius: 40
                }
            },
            grid: {
                show: false,
                padding: {
                    top: 0,
                    bottom: 0,
                    left: 0,
                    right: 0
                }
            },
            xaxis: {
                min: 0,
                max: 15,
                labels: {
                    show: false
                },
                axisBorder: {
                    show: false
                },
                axisTicks: {
                    show: false
                }
            },
            yaxis: {
                min: 0,
                max: 15,
                labels: {
                    show: false
                }
            },
            tooltip: {
                enabled: false
            },
            states: {
                hover: {
                    filter: {
                        type: 'none'
                    }
                }
            }
        }), {
            colors: ['#22d3ee', '#e5e7eb', '#3b82f6'],
            markers: {
                strokeColors: 'rgb(255, 255, 255)'
            }
        }, {
            colors: ['#3b82f6', '#22d3ee', '#e5e7eb'],
            markers: {
                strokeColors: 'rgb(38, 38, 38)'
            }
        });
    })();

    (function () {
        buildChart('#hs-single-line-chart', (mode) => ({
            chart: {
                height: '70%',
                type: 'line',
                toolbar: {
                    show: false
                },
                zoom: {
                    enabled: false
                }
            },
            series: [
                {
                    name: 'Sales',
                    data: [0, 27000, 25000, 27000, 40000]
                }
            ],
            dataLabels: {
                enabled: false
            },
            stroke: {
                curve: 'smooth',
                width: [4, 4, 4],
                dashArray: [0, 0, 4]
            },
            title: {
                show: false
            },
            legend: {
                show: false
            },
            grid: {
                strokeDashArray: 0,
                borderColor: '#e5e7eb',
                padding: {
                    top: -20,
                    right: 0
                }
            },
            xaxis: {
                type: 'category',
                categories: [
                    '25 January 2023',
                    '28 January 2023',
                    '31 January 2023',
                    '1 February 2023',
                    '3 February 2023'
                ],
                axisBorder: {
                    show: false
                },
                axisTicks: {
                    show: false
                },
                tooltip: {
                    enabled: false
                },
                labels: {
                    offsetY: 5,
                    style: {
                        colors: '#9ca3af',
                        fontSize: '13px',
                        fontFamily: 'Inter, ui-sans-serif',
                        fontWeight: 400
                    },
                    formatter: (title) => {
                        let t = title;

                        if (t) {
                            const newT = t.split(' ');
                            t = `${newT[0]} ${newT[1].slice(0, 3)}`;
                        }

                        return t;
                    }
                }
            },
            yaxis: {
                min: 0,
                max: 40000,
                tickAmount: 4,
                labels: {
                    align: 'left',
                    minWidth: 0,
                    maxWidth: 140,
                    style: {
                        colors: '#9ca3af',
                        fontSize: '12px',
                        fontFamily: 'Inter, ui-sans-serif',
                        fontWeight: 400
                    },
                    formatter: (value) => value >= 1000 ? `${value / 1000}k` : value
                }
            },
            tooltip: {
                custom: function (props) {
                    const { categories } = props.ctx.opts.xaxis;
                    const { dataPointIndex } = props;
                    const title = categories[dataPointIndex].split(' ');
                    const newTitle = `${title[0]} ${title[1]}`;

                    return buildTooltip(props, {
                        title: newTitle,
                        mode,
                        hasTextLabel: true,
                        wrapperExtClasses: 'min-w-28',
                        labelDivider: ':',
                        labelExtClasses: 'ms-2'
                    });
                }
            }
        }), {
            colors: ['#2563EB', '#22d3ee', '#d1d5db'],
            grid: {
                borderColor: '#e5e7eb'
            }
        }, {
            colors: ['#3b82f6', '#22d3ee', '#6b7280'],
            grid: {
                borderColor: '#374151'
            }
        });
    })();

    (function () {
        buildChart('#hs-radial-chart', (mode) => ({
            chart: {
                height: '80%',
                type: 'radialBar',
                zoom: {
                    enabled: false
                }
            },
            plotOptions: {
                radialBar: {
                    hollow: {
                        margin: 15,
                        size: "30%"
                    },
                    dataLabels: {
                        total: {
                            show: true,
                            label: 'TOTAL'
                        }
                    }
                }
            },
            series: [67, 84, 97, 61, 185],
            labels: ['CSS', 'UI', 'HTML', 'JS'],
        }));
    })();

    var options = {
        series: [{
            data: [21, 22, 10, 28, 16, 21, 13, 30]
        }],
        chart: {
            height: 350,
            type: 'bar',
            events: {
                click: function (chart, w, e) {
                    // console.log(chart, w, e)
                }
            }
        },
        colors: colors,
        plotOptions: {
            bar: {
                columnWidth: '45%',
                distributed: true,
            }
        },
        dataLabels: {
            enabled: false
        },
        legend: {
            show: false
        },
        xaxis: {
            categories: [
                ['John', 'Doe'],
                ['Joe', 'Smith'],
                ['Jake', 'Williams'],
                'Amber',
                ['Peter', 'Brown'],
                ['Mary', 'Evans'],
                ['David', 'Wilson'],
                ['Lily', 'Roberts'],
            ],
            labels: {
                style: {
                    colors: colors,
                    fontSize: '12px'
                }
            }
        }
    };

    (function () {
        buildChart('#hs-radial-chart', (mode) => ({
            chart: {
                height: '80%',
                type: 'radialBar',
                zoom: {
                    enabled: false
                }
            },
            plotOptions: {
                radialBar: {
                    hollow: {
                        margin: 15,
                        size: "30%"
                    },
                    dataLabels: {
                        total: {
                            show: true,
                            label: 'TOTAL'
                        }
                    }
                }
            },
            series: [67, 84, 97, 61, 185],
            labels: ['CSS', 'UI', 'HTML', 'JS'],
        }));
    })();
});

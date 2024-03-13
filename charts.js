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
                    data: [23000, 44000, 55000, 57000, 80000, 61000, 58000, 12500, 60000, 66000, 34000, 78000]
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


    // donut
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
});

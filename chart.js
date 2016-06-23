$(document).ready(function() {

    var totalUSRegion = {
        "Brewmaster": 731,
        "Blood": 1768,
        "Enhancement": 2533,
        "Beast Mastery": 1224,
        "Restoration Druid": 408,
        "Windwalker": 323,
        "Marksmanship": 221,
        "Affliction": 17,
        "Balance": 153,
        "Fire": 51,
        "Destruction": 119,
        "Frost Death Knight": 153,
        "Combat": 238,
        "Discipline": 17,
        "Demonology": 51,
        "Feral": 51,
        "Fury": 51,
        "Frost Mage": 51,
        "Arms": 68,
        "Arcane": 17,
        "Retribution": 68,
        "Shadow": 17,
        "Restoration Shaman": 17,
        "Frost": 17,
        "Mistweaver": 17,
        "Subtlety": 0
    };

    var usSpecCount = [
        731,
        1768,
        2533,
        1224,
        408,
        323,
        221,
        17,
        153,
        51,
        119,
        153,
        238,
        17,
        51,
        51,
        51,
        51,
        68,
        17,
        68,
        17,
        17,
        17,
        17,
        0
    ];

    var totalEURegion = {
        "Brewmaster": 1190,
        "Blood": 1649,
        "Enhancement": 3026,
        "Beast Mastery": 1360,
        "Restoration Druid": 306,
        "Windwalker": 255,
        "Marksmanship": 119,
        "Affliction": 0,
        "Balance": 51,
        "Fire": 0,
        "Destruction": 136,
        "Frost Death Knight": 51,
        "Combat": 272,
        "Discipline": 0,
        "Demonology": 0,
        "Feral": 34,
        "Fury": 17,
        "Frost Mage": 0,
        "Arms": 0,
        "Arcane": 0,
        "Retribution": 0,
        "Shadow": 0,
        "Restoration Shaman": 0,
        "Frost": 0,
        "Mistweaver": 0,
        "Subtlety": 34
    };

    var euSpecCount = [
        1190,
        1649,
        3026,
        1360,
        306,
        255,
        119,
        0,
        51,
        0,
        136,
        51,
        272,
        0,
        0,
        34,
        17,
        0,
        0,
        0,
        0,
        0,
        0,
        0,
        0,
        34
    ];

    var totalAllRegions = {
        "Brewmaster": 1921,
        "Blood": 3417,
        "Enhancement": 5559,
        "Beast Mastery": 2584,
        "Restoration Druid": 714,
        "Windwalker": 578,
        "Marksmanship": 340,
        "Affliction": 17,
        "Balance": 204,
        "Fire": 51,
        "Destruction": 255,
        "Frost Death Knight": 204,
        "Combat": 510,
        //"Restoration": 119,
        "Discipline": 17,
        "Demonology": 51,
        "Feral": 85,
        "Fury": 68,
        "Frost Mage": 51,
        "Arms": 68,
        "Arcane": 17,
        "Retribution": 68,
        "Shadow": 17,
        "Restoration Shaman": 17,
        "Frost": 17,
        "Mistweaver": 17,
        "Subtlety": 34
    };

    var usEuSpecCount = [
        1921,
        3417,
        5559,
        2584,
        714,
        578,
        340,
        17,
        204,
        51,
        255,
        204,
        510,
        17,
        51,
        85,
        68,
        51,
        68,
        17,
        68,
        17,
        17,
        17,
        17,
        34
    ];

    var specs = [
        "Brewmaster",
        "Blood",
        "Enhancement",
        "Beast Mastery",
        "Restoration Druid",
        "Windwalker",
        "Marksmanship",
        "Affliction",
        "Balance",
        "Fire",
        "Destruction",
        "Frost Death Knight",
        "Combat",
        //"Restoration",
        "Discipline",
        "Demonology",
        "Feral",
        "Fury",
        "Frost Mage",
        "Arms",
        "Arcane",
        "Retribution",
        "Shadow",
        "Restoration Shaman",
        "Frost",
        "Mistweaver",
        "Subtlety"
    ];

    var barColors = ["#00FF96", "#C41F3B", "#0070DE", "#ABD473", "#FF7D0A", "#00FF96", "#ABD473", "#9482C9",
        "#FF7D0A", "#69CCF0", "#9482C9", "#C41F3B", "#FFF569", "#B3B3B3", "#9482C9", "#FF7D0A", "#C79C6E", "#69CCF0",
        "#C79C6E", "#69CCF0", "#F58CBA", "#B3B3B3", "#0070DE", "#69CCF0", "#00FF96", "#FFF569"
    ];

    var barChart = $("#barChart");

    var barChartData = {
        labels: specs,
        datasets: [{
            label: 'US',
            backgroundColor: barColors,
            data: usSpecCount
        }, {
            hidden: true,
            label: 'EU',
            backgroundColor: barColors,
            data: euSpecCount
        }, {
            hidden: true,
            label: 'US + EU',
            backgroundColor: barColors,
            data: usEuSpecCount
        }]
    };

    var myBarChart = new Chart(barChart, {
        type: 'horizontalBar',
        data: barChartData,
        options: {
            responsive: true,
            legend: {
                position: 'top',
            },
            title: {
                display: true,
                fontSize: 18,
                text: 'WoD Challenge Mode Gold - Spec Distribution'
            }
        }
    });

});

const url = "https://2u-data-curriculum-team.s3.amazonaws.com/dataviz-classroom/v1.1/14-Interactive-Web-Visualizations/02-Homework/samples.json"


function init() {
    let dropDown = d3.select("#selDataset");
    d3.json(url).then((jsonData) => {
        let sampleIds = jsonData.names;
        sampleIds.map((sampleID) => {
            dropDown.append("option").text(sampleID).property("value", sampleID);
        });
        let initSample = sampleIds[0];
        buildMetadata(initSample);
        buildCharts(initSample);
    });
}


function buildCharts(sample) {
    d3.json(url).then(function (jsonData) {
        let samples = jsonData.samples;
        let sampleInfo = samples.filter(row => row.id == sample);
        let sampleValues = sampleInfo[0].sample_values;
        let sampleValuesSlice = sampleValues.slice(0,10).reverse();
        let otuIds = sampleInfo[0].otu_ids;
        let otuIdsSlice = otuIds.slice(0,10).reverse();
        let otuLabels = sampleInfo[0].otu_labels;
        let otuLabelsSlice = otuLabels.slice(0,10).reverse();

        // Bar Chart
        let trace1 = {
            x: sampleValuesSlice,
            y: otuIdsSlice.map(id => `OTU ${id}`),
            type: "bar",
            orientation: "h",
            text: otuLabelsSlice
        };

        let data1 = [trace1];

        let layout1 = {
            title: "Top 10 OTUs Found in Test Subject"
        };

        Plotly.newPlot("bar", data1, layout1)

        // Bubble Chart
        let trace2 = {
            x: otuIds,
            y: sampleValues,
            mode: "markers",
            marker: {
                size: sampleValues,
                color: otuIds,
                colorscale: "Earth"
            },
            text: otuLabels
        };

        let data2 = [trace2];

        let layout2 = {
            title: "OTUs Found in Test Subject",
            xaxis: {title: "OTU ID"}
        };

        Plotly.newPlot("bubble", data2, layout2);

    });
};


function buildMetadata(sample) {
    let Meta = d3.select("#sample-metadata");
    Meta.html("");
    d3.json(url).then(function (data) {
        let metaData = data.metadata;
        let metaDataSample = metaData.filter(row => row.id == sample);
        metaDataSample.map((row) => {
            Object.entries(row).map(([key, value]) => {
                Meta.append("p").text(`${key}: ${value}`);
            });  
        });
    });
};


function optionChanged(sample) {
    buildMetadata(sample);
    buildCharts(sample);
};


init();

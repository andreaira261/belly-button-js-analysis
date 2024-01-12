# Belly Button JavaScript Analysis

## Overview 
In this assignment, we built an interactive dashboard to explore the [Belly Button Biodiversity dataset](http://robdunnlab.com/projects/belly-button-biodiversity/), which catalogs the microbes that colonize human navels. JavaScript ([app.js](static/js/app.js)) was used for dynamic content updates and HTML ([index.html](index.html)) for structuring the webpage.

We used the D3 library to read the dataset from https://2u-data-curriculum-team.s3.amazonaws.com/dataviz-classroom/v1.1/14-Interactive-Web-Visualizations/02-Homework/samples.json. 
For the data visualizations, we used Plotly to create a bar chart to display the top 10 OTUs found in each Test Subject, a bubble chart to display further details about the OTUs found, and a gauge chart to plot the weekly washing frequency of the individual. Furthermore, we also created a Metadata table to show each Test Subject's demographic information. 

App Dashboard Link: [Belly Button Biodiversity Dashboard](https://andreaira261.github.io/belly-button-js-challenge/).

![dashboard](https://github.com/andreaira261/belly-button-js-challenge/assets/48165713/16147600-e205-4bcc-8657-642ff4f545e9)


## Languages/ Tools: 
- JavaScript
- HTML
- D3.js
- Plotly

## Bar Charts
This chart features a horizontal bar chart with a dropdown menu to display the top 10 OTUs found in the selected individual. It uses `otu_ids` as the labels and `otu_labels` as the tooltip. 

![bar-chart](https://github.com/andreaira261/belly-button-js-challenge/assets/48165713/1ae24a4a-e5f1-4fd3-9324-8f761900aa5f)

## Bubble Charts
This chart displays a bubble chart presenting the following of the selected individual: 
  - `otu_ids` for the x values
  - `sample_values` for the y values
  - `sample_values` for the marker size
  - `otu_ids` for the marker colors
  - `otu_labels` for the text values

![bubble-chart](https://github.com/andreaira261/belly-button-js-challenge/assets/48165713/de507f35-04a6-4e89-969c-486313032567)

## Gauge Chart
This chart displays a gauage chart to plot the weekly washing frequency of the selected individual. 

![gauge-chart](https://github.com/andreaira261/belly-button-js-challenge/assets/48165713/f7a5994b-9162-4c6e-b5dc-04a5609c46f5)

## Metadata and Deployment
This table displays the selected individual's demographic information.

![metadata](https://github.com/andreaira261/belly-button-js-challenge/assets/48165713/bec4cb35-b7d2-4a15-8fec-0c9faa0bdf46)

All the tables and graphs are updated when a new sample is selected.

The app is then deployed to Github pages: https://andreaira261.github.io/belly-button-js-challenge/

# BuyResale

BuyResale allows users to see past transaction records (from Jan 2017 onwards) for HDB Resale Flats in Singapore. This front-end webpage created using React provides a general idea on the resale flats market so that users can make more informed choices when purchasing or selling their resale flats. This webpage is especially useful given that there are numerous types and models of resale flats in Singapore.

Deployed on GitHub Pages:

## Technologies Used

React, Bootstrap with React, Ajax (fetch) for API.

## App Overview

![BuyResale Screenshot](/BuyResaleScreenshot.png)

BuyResale webpage is divided into 4 main sections - Home Page, Search Page, Compare Page, Resources Page. The user is automatically redirected to the Home Page when they access BuyResale url.

### Home Page

At the Home Page, the user is greeted by a background image of an ordinary block of HDB resale flat in Singapore. The user can then click on the "Start Search" button to kick off their search for past transaction records. The user can also access the Home Page, Search Page, Compare Page, Resources Page by clicking on the links provided at the navigation bar.

### Search Page

The user can access the Search Page in 2 ways:

- by clicking on the "Start Search" button located on the Home Page
- by clicking on the Search link at the navigation bar of the webpage

When the user lands on the Search Page, they can select the town in which they are interested in. Each town option is displayed on a card - each card contains an image which is iconic to that particular town as well as the name of the town. There are 26 possible options (arranged in alphabetical order): Ang Mo Kio, Bedok, Bishan, Bukit Batok, Bukit Merah, Bukit Panjang, Bukit Timah, Central Area, Choa Chu Kang, Clementi, Geylang, Hougang, Jurong East, Jurong West, Kallang/Whampoa, Marine Parade, Pasir Ris, Punggol, Queenstown, Sembawang, Sengkang, Serangoon, Tampines, Toa Payoh, Woodlands, Yishun. These town list was obtained from HDB official website (https://www.hdb.gov.sg/about-us/history/hdb-towns-your-home)

After the user has selected their choice of town, they can select the HDB flat type. There are 7 possible options (arranged in increasing flat size): 1 Room, 2 Room, 3 Room, 4 Room, 5 Room, Executive, Multi-Generation.

Once the user selects their choice of flat type, flat model options will be revealed. The flat model options shown are only those applicable to the flat type chosen by the user:

| Flat Types Selected | Flat Models Shown                                                                                                                          |
| ------------------- | ------------------------------------------------------------------------------------------------------------------------------------------ |
| 1 Room              | Improved                                                                                                                                   |
| 2 Room              | 2 Room, DBSS, Improved, Model A, Premium Apartment, Standard                                                                               |
| 3 Room              | DBSS, Improved, Model A, New Generation, Premium Apartment, Simplified, Standard, Terrace                                                  |
| 4 Room              | Adjoined Flat, DBSS, Improved, Model A, Model A2, New Generation, Premium Apartment, Premium Apartment Loft, Simplified, Standard, Terrace |
| 5 Room              | 3Gen, Adjoined Flat, DBSS, Improved, Improved-Maisonette, Model A, Model A-Maisonette, Premium Apartment, Premium Apartment Loft, Standard |
| Executive           | Adjoined Flat, Apartment, Maisonette, Premium Apartment, Premium Maisonette                                                                |
| Multi-Generation    | Multi Generation                                                                                                                           |

After the user selects their town, flat type, and flat model, BuyResale will fetch data from data.gov.sg and display the results related to the user's choices made.

### Compare Page

This page is still a work-in-progress. The idea behind this page is to create a comparison feature where users can compare between 2 areas of their choices to see the differences e.g. price, lease remaining etc.

### Resources Page

This page provides users with a list of relevant links that could further help them in their decision-making process of buying/selling a HDB flat. The following links are provided on this page:

| Links                         | Description/Purpose                                                                                     |
| ----------------------------- | ------------------------------------------------------------------------------------------------------- |
| HDB Resale Portal             | HDB Portal guides you through the steps to purchase and sell a resale HDB flat                          |
| HDB Finance Calculator        | Users can use the calculator provided by HDB to calculate their budget, payment plan, or sales proceeds |
| HDB Financial Planning Guides | Articles provided by HDB to help users in financial planning for their next purchase/sale of HDB flat   |
| Carousell                     | See the latest HDB for sale listings on Carousell website                                               |
| PropertyGuru                  | See the latest HDB for sale listings on PropertyGuru website                                            |
| 99.co                         | See the latest HDB for sale listings on 99.co website                                                   |

## APIs Used

data.gov.sg API was used for this project (Resale Flat Prices: https://data.gov.sg/dataset/resale-flat-prices). This API provides the resale flat prices based on registration date from Jan 2017 onwards till present. The data is updated monthly and is managed by HDB.

## Possible Future Improvements

Some possible future improvements that can be made to this webpage:

- Categorising the town options under the 5 regions in Singapore: North, North-East, East, West, Central
  - To inform users where each town is located at in Singapore
- Providing a map view to an area selected by the user
  - To provide users with an idea of the resale flats' location and their surrounding amenities
  - Can possibly provide a heat map to show areas with high frequency of transaction
- Units conversion feature to toggle between square metres (sqm) to square feet (sqft)
- Provide a chart to portray the trends of prices in a selected area

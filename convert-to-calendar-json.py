import csv
import json

monthly_calendar = 'febuary-2024'
data = {}
# open the csv file
with open("{0}.csv".format(monthly_calendar), 'r') as csvfile:
    # read the csv file using DictReader, which will give us an OrderedDict for each row
    reader = csv.DictReader(csvfile)
    # create an empty dict to hold our data

    for row in reader:
        # create an empty dict to hold the information for each date
        date_dict = {}
        # islamicDate may correspond to the "Islamic Date" column
        date_dict['Day'] = row['Day']
        date_dict['IslamicDate'] = row['Islamic Date']
        date_dict['IslamicMonth'] = row['Islamic month']
        date_dict['FajrBeg'] = row['Fajr Beg Time']
        date_dict['FajrAzan'] = row['Fajr Azan']
        date_dict['Sunrise'] = row['Sunrise']
        date_dict['ZawalBeg'] = row['Zawal Beg Time']
        date_dict['ZoharBeg'] = row['Zohar Beg Time']
        date_dict['ZoharJumaAzan'] = row['Zohar/ Juma Azan']
        date_dict['AsarBeg'] = row['Asar Beg Time']
        date_dict['AsarAzan'] = row['Asar Azan']
        date_dict['MagribAzan'] = row['Magrib Azan']
        date_dict['IshaAzan'] = row['Isha Azan']
        # use the Eng Date as the key in our data dict, and assign the date_dict to it
        data[row['Eng Date']] = date_dict

    # create the json object
    json_object = json.dumps(data, indent=4)

    # print the json object
    print(json_object)

with open("{0}.json".format(monthly_calendar), 'w') as json_file:
    json.dump(data, json_file)
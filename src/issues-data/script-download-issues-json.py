#!/usr/bin/env python3
#author: Harshvardhan J. Pandit

'''Downloads the ISSUES spreadsheets in CSV form 
and convert it to JSON data structure for use in app'''

# Google Export link
GOOGLE_EXPORT_LINK = (
    'https://docs.google.com/spreadsheets/d/'
    '%s/gviz/tq?tqx=out:csv&sheet=%s')

# The document *must* be publicly viewable (minimum permissions)
# The document ID is found within the URL
DPV_DOCUMENT_ID = '1w__96kr57Zw2zI-Oi8wL8xqVpjCLL7BahB9hY4mOVfc'
# The sheet names are assumed to be valid IRIs
# If they are not, escape them for IRI/HTML representation
DPV_SHEETS = (
    'RegularLanguage',
    'Legal',
    # 'UI-UX',
    )
# folder to store data
DATA_PATH = '.'

import csv
import json
from urllib import request


def download_csv(document_id, sheet_name, save_path=DATA_PATH):
    '''Download the sheet and save to given path'''
    url = GOOGLE_EXPORT_LINK % (document_id, sheet_name)
    print(f'Downloading {sheet_name}...', end='')
    filepath = f'{save_path}/{sheet_name}.csv'
    request.urlretrieve(url, filepath)
    print('DONE')
    return filepath


JSON_OUTPUT = []
for sheet in DPV_SHEETS:
    filepath = download_csv(DPV_DOCUMENT_ID, sheet)
    print(filepath)
    CSV_OUTPUT = { 'domain': sheet, 'terms': [] }
    CSV_OUTPUT_TERMS = CSV_OUTPUT['terms']
    with open(filepath, 'r') as csvfile:
        reader = csv.reader(csvfile)
        next(reader)
        # prev will hold the previous row's contents so as to enable 
        # collecting clauses + descriptions for the same label
        prev_label = None
        prev_laws = None
        for label, clause, description in reader:
            label = label.strip()
            clause = clause.strip()
            description = description.strip()
            if label == prev_label:
                prev_laws['laws'].append({ clause: description})
            else:
                prev_label = label
                prev_laws = {
                    'value': label,
                    'laws': [
                        { clause: description }
                        ]
                    }
                CSV_OUTPUT_TERMS.append(prev_laws)
    JSON_OUTPUT.append(CSV_OUTPUT)

with open('src/issues-data/Isses.json', 'w') as fd:
    fd.write(json.dumps(JSON_OUTPUT, indent=2))
# print(json.dumps(JSON_OUTPUT, indent=2))

# CSV structure
# [0] label, [1] legal-clause, [2] description

# JSON output structure
# [ { 
    # 'domain': Sheet_Name,
    # 'terms': [ {
    #     'value': [0] label,
    #     'laws': {
    #         [1] legal-clause: [2] description
    #     }
    # } ]
# } ]

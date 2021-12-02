from flask import Flask, request
from flask_cors import cross_origin
import pickle
import pandas as pd


"""
LOAD MODEL
"""
# model = pickle.load(open('model.pkl', 'rb'))


"""
SERVER CONFIG
"""
app = Flask(__name__) # create app instance


"""
ROUTES
"""
@app.route('/predict', methods=['POST'])
@cross_origin()
def predict():
    # 1) grab POST request data
    form = request.json

    # 2) define form keys as dataset columns for matching model input columns
    form_column_dict = {
        'intakeTermCode': 'INTAKE TERM CODE',
        'admitTermCode': 'ADMIT TERM CODE',
        'expectedGradTermCode': 'EXPECTED GRAD TERM CODE',
        'primaryProgramCode': 'PRIMARY PROGRAM CODE',
        'hsAverageMarks': 'HS AVERAGE MARKS',
        'englishTestScore': 'ENGLISH TEST SCORE',
        'firstYearPersistenceCount': 'FIRST YEAR PERSISTENCE COUNT',
        'intakeCollegeExperience': 'INTAKE COLLEGE EXPERIENCE',
        'schoolCode': 'SCHOOL CODE',
        'studentLevelName': 'STUDENT LEVEL NAME',
        'timeStatusName': 'TIME STATUS NAME',
        'fundingSourceName': 'FUNDING SOURCE NAME',
        'mailingPostalCodeGroup3': 'MAILING POSTAL CODE GROUP 3',
        'gender': 'GENDER',
        'disabilityInd': 'DISABILITY IND',
        'futureTermEnroll': 'FUTURE TERM ENROL',
        'academicPerformance': 'ACADEMIC PERFORMANCE',
        'ageGroupLongName': 'AGE GROUP LONG NAME',
        'firstGenerationInd': 'FIRST GENERATION IND',
        'effectiveAcademicHistory': 'EFFECTIVE ACADEMIC HISTORY',
        'applicantTargetSegmentName': 'APPLICANT TARGET SEGMENT NAME'
    }

    # 3) format data into model input dataframe format
    pred_sample = {}
    print("\nFORM KEYS, VALUES and TYPES")
    print("-----------------------------")
    for key, value in form.items():       
        print(key, ":>>", value, ":>>", type(value))
        pred_sample[form_column_dict.get(key)] = value
    print("\n")

    # 4) final format
    pred_sample=[pred_sample]
    print("FORMATED FORM (ready to transform into a DF)")
    print("--------------------------------------------")
    print(type(pred_sample))
    print(pred_sample)
    print("\n")

    pred_sample = pd.DataFrame(pred_sample)

    return form
    # prediction = model.predict(arr)
    # print("\nPrediction\n",prediction)
    # if prediction[0] == 0:
    #     return render_template('home.html', prediction_text='Model predicts that the bike should be STOLEN!')
    # elif prediction[0] == 1:
    #     return render_template('home.html', prediction_text='Model predicts that the bike should be RECOVERED!')


## Start Flash Server
# Since there is no main() function in Python, 
# when the command to run a python program is given to the interpreter, 
# the code that is at level 0 indentation is to be executed. 
# However, before doing that, it will define a few special variables. 
# __name__ is one such special variable. If the source file is executed as the main program, 
# the interpreter sets the __name__ variable to have a value “__main__”. 
# If this file is being imported from another module, __name__ will be set to the module’s name.
if __name__ == '__main__':
    app.run(debug=True) # turn off if production mode







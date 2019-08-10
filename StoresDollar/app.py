import pandas as pd
import numpy as np
from flask import Flask, jsonify, render_template

# #Read the data into a pandas Dataframe
# df_read = pd.read_csv('Data_2016.csv', encoding='latin-1')
# df = df_read[['GEO.id2', 'EMP', 'ESTAB']].copy()
# df = df.rename (columns={'GEO.id2':'County', 'EMP':'NumEmployees', 'ESTAB':'NumEstab'})

# #Convert Categorical Variables into Dummy Variables
# df = pd.concat([df,pd.get_dummies(df['County'],drop_first=False,prefix="County")],axis=1)
# df = pd.concat([df,pd.get_dummies(df['NumEmployees'],drop_first=False,prefix="NumEmployees")],axis=1)

# df.drop(['County', 'NumEmployees'],axis=1,inplace=True)
# df['NumEstab'] = df['NumEstab'].apply(lambda x:1 if x>=10 else 0)

# #Create the train and test split
# from sklearn.model_selection import train_test_split

# X_train, X_test, y_train, y_test = train_test_split(df.drop('NumEstab',axis=1), 
# df['NumEstab'], test_size=0.30, 
# random_state=10)

# from sklearn.linear_model import LogisticRegression

# #Train the model
# logmodel = LogisticRegression()
# logmodel.fit(X_train,y_train)

# #Predicting on the Test Set
# predictions = logmodel.predict(X_test)

# # Model Evaluation
# from sklearn.metrics import classification_report

# truePos = X_test[((predictions == 1) & (y_test == predictions))]
# falsePos = X_test[((predictions == 1) & (y_test != predictions))]
# trueNeg = X_test[((predictions == 0) & (y_test == predictions))]
# falseNeg = X_test[((predictions == 0) & (y_test != predictions))]

# TP = truePos.shape[0]
# FP = falsePos.shape[0]
# TN = trueNeg.shape[0]
# FN = falseNeg.shape[0]

# accuracy = float(TP + TN)/float(TP + TN + FP + FN)

# #create a dataframe containing only the categorical variables. 
# categoricals = df.drop('NumEstab',axis=1)

# index_dict = dict(zip(categoricals.columns,range(categoricals.shape[1])))
# categorical_vector = np.zeros(len(index_dict))
# categorical_vector[index_dict['County_1007']] = 1  
# categorical_vector[index_dict['NumEmployees_28']] = 1 

# categorical_vector = np.array(categorical_vector).reshape((1, -1))
# prediction = logmodel.predict(categorical_vector)

app = Flask(__name__)

@app.route("/")
def index():
    return render_template("index.html")


if __name__ == "__main__":
    app.run()

__author__ = 'eli'
import csv

gbFile = "raw/2014gb.csv"
nongbFile = "raw/2014nongb.csv"
finalFile = "finished/2014.csv"

class Case:
    def __init__(self, college, department, name, position, positionSal, totalSal, campus, empCode, tenure, howPaid):
        self.college = college
        self.department = department
        self.name = name
        self.position = position
        self.positionSal = positionSal
        self.totalSal = totalSal
        self.campus = campus
        self.empCode = empCode
        self.tenure = tenure
        self.howPaid = howPaid

# declare variables
everyone = []

# file to open
with open(gbFile, 'rb') as csvfile:
    gb = csv.reader(csvfile, delimiter=',', quotechar='"')
    next(gb, None)
    for row in gb:
        x = Case(row[1], row[3], row[4], row[5], row[11], row[15], row[17], row[7], row[6], row[19])
        everyone.append(x)

with open(nongbFile, 'rb') as csvfile:
    nongb = csv.reader(csvfile, delimiter=',', quotechar='"')
    next(nongb,None)
    for row in nongb:
         x = Case(row[1], row[3], row[4], row[5], row[8], row[10], row[12], row[6], "", row[14])
         everyone.append(x)

csvPeople = []

for person in everyone:
    peepsArray = []
    peepsArray.append('"' + person.college + '"')
    peepsArray.append('"' + person.department + '"')
    peepsArray.append('"' + person.name + '"')
    peepsArray.append('"' + person.position + '"')
    peepsArray.append(person.positionSal)
    peepsArray.append(person.totalSal)
    peepsArray.append(person.campus)
    peepsArray.append(person.empCode)
    peepsArray.append(person.tenure)
    peepsArray.append(person.howPaid)
    x = ", ".join(peepsArray)
    csvPeople.append(x)

with open(finalFile,"a") as output:
    output.write("College, Department, Name, Position, PositionSal, TotalSal, Campus, EmpClass, Tenure, HowPaid\n")
    for employee in csvPeople:
        output.write(employee + "\n")

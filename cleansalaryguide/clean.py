__author__ = 'eli'
import csv

gbFile = "raw/flstatesalaries.csv"
finalFile = "finished/2015fl.csv"

class Case:
    def __init__(self, position, name, howPaid, time, department, hiredate, positionSal):
        self.position = position
        self.name = name
        self.howPaid = howPaid
        self.time = time
        self.department = department
        self.hiredate = hiredate
        self.positionSal = positionSal.replace(",", "")

# declare variables
everyone = []

# file to open
with open(gbFile, 'rU') as csvfile:
    gb = csv.reader(csvfile, delimiter=',', quotechar='"')
    next(gb, None)
    for row in gb:
        x = Case(row[0], row[1], row[2], row[3], row[4], row[5], row[6])
        everyone.append(x)

#with open(nongbFile, 'rb') as csvfile:
#    nongb = csv.reader(csvfile, delimiter=',', quotechar='"')
#    next(nongb,None)
#    for row in nongb:
#         x = Case(row[1], row[3], row[4], row[5], row[8], row[10], row[12], row[6], "", row[14])
#         everyone.append(x)

csvPeople = []

for person in everyone:
    peepsArray = []
    peepsArray.append('"' + person.department + '"')
    peepsArray.append('"' + person.name + '"')
    peepsArray.append('"' + person.position + '"')
    peepsArray.append(person.positionSal)
    peepsArray.append(person.hiredate)
    peepsArray.append(person.time)
    peepsArray.append(person.howPaid)
    x = ", ".join(peepsArray)
    csvPeople.append(x)

with open(finalFile,"a") as output: 
    output.write("Department, Name, Position, PositionSal, hiredate, time, HowPaid\n")
    for employee in csvPeople:
        output.write(employee + "\n")

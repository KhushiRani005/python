#dictionary in python
"""info={
    "name": "khushi",
    "subjects":["python","C","Java"],
    "age":22,
    "marks" : 98
}"""


"""null_dict={}
null_dict["name"]="apnacollege"
print(null_dict)
"""
"""info["name"] ="shradha"
print(info)"""


#nesting in directory
"""student= {
    "name":"khushi rani",
    "subjects": {
        "phy":78,
        "che":79,
        "math":98
    }
}"""
#print(student["subjects"]["che"])
"""print(len(student))
print(list(student.keys()))"""

#print(list(student.values()))

"""pairs =list(student.items())
print(pairs[0])"""

"""new_dict=({"city":"Delhi","age":"20"})
student.update(new_dict)
print(student)
"""

#Sets in python
"""collection = {1,2,3,4,"hello","hi","hi"}

print(collection)
print(type(collection))
print(len(collection))"""


"""collection=set() #empyt set
collection.add(1)
collection.add((2,3,5))
collection.add("apna college")

#collection.clear()

print(len(collection))
"""

"""collection ={"hello","apnacolege","world","python","coding"}

print(collection.pop())
print(collection.pop())"""

#union in set
"""set1={1,2,3}
set2={2,3,4}

print(set2.union(set2))
print(set1)
print(set2)
"""
#intersection in set
#print(set1.intersection(set2))

#practice question
"""dictionary= {
    "cat":"a small animal",
    "table":["a piece of furniture", "list of facts & figures"]

}
print(dictionary)"""

"""subjects={
    "python","java","c++","python","javascript","java"
,"python","java","c++","c"
}
print(len(subjects))"""


marks={}

x=int(input("enter phy:"))
marks.update({"phy":x})

x=int(input("enter maths:"))
marks.update({"maths":x})

x=int(input("enter che:"))
marks.update({"che":x})

print(marks)
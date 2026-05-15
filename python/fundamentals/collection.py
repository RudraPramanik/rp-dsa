# list — ordered, mutable
lst = [1, 2, 3]
lst.append(4)
lst.extend([5,6])
lst.pop()             # removes last
lst[1:3]             # slice [2,3]

# tuple — ordered, immutable
t = (1, 2, 3)
a, b, *rest = t

# set — unordered, unique
s = {1, 2, 3}
s.add(4)
# s1 & s2   # intersection
# s1 | s2   # union

# dict — key→value
d = {"a": 1, "b": 2}
d.get("c", 0)        # default=0
print(d)
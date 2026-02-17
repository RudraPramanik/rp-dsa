class MinStack(object):

    def __init__(self):
        # main stack to store values
        self.stack = []

        # auxiliary stack to store minimums
        self.min_stack = []

    def push(self, val):
        self.stack.append(val)

        # if min_stack is empty, val is min
        if not self.min_stack:
            self.min_stack.append(val)
        else:
            # store the smaller one
            self.min_stack.append(min(val, self.min_stack[-1]))

    def pop(self):
        self.stack.pop()
        self.min_stack.pop()

    def top(self):
        return self.stack[-1]

    def getMin(self):
        return self.min_stack[-1]



# ------------------------------------------------------------------------------


# ------------------------------------------------------------------------------


# ------------------------------------------------------------------------------


# ------------------------------------------------------------------------------


# ------------------------------------------------------------------------------


# ------------------------------------------------------------------------------


# ------------------------------------------------------------------------------


# ------------------------------------------------------------------------------


# ------------------------------------------------------------------------------

def namelist(names):
    str = ''
    if len(names) == 0:
        return str
    for i in range(len(names)):
        n = names[i]['name']
        if i == len(names) - 1:
            str += '& '
        elif i != 0:
            str += ', '
        str += n
    return str


# ------------------------------------------------------------------------------

def sum_two_smallest_numbers(numbers):
    numbers.sort()
    return numbers[0] + numbers[1]


# ------------------------------------------------------------------------------

def sum_two_smallest_numbers(numbers):
    a = min(numbers)
    numbers.remove(a)
    b = min(numbers)
    return a + b
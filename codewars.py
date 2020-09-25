

# ------------------------------------------------------------------------------


# ------------------------------------------------------------------------------


# ------------------------------------------------------------------------------


# ------------------------------------------------------------------------------


# ------------------------------------------------------------------------------


# ------------------------------------------------------------------------------


# ------------------------------------------------------------------------------

def sort_array(source_array):
    odds = list(filter(lambda x: x % 2 == 1, source_array))
    j = 0
    for i in range(len(source_array)):
        if source_array[i] % 2 == 1:
            source_array[i] = odds[j]
            j += 1
    return source_array


# ------------------------------------------------------------------------------

def domain_name(url):
    i1 = 0
    i2 = 0
    if 'www.' in url:
        i1 = url.index('www.') + 4
    elif '//' in url:
        i1 = url.index('://') + 3
    url = url[i1:]
    i2 = url.index('.')
    return url[:i2]


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
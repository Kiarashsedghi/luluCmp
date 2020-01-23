def flatten (li , m) :
    for l in li :
        if type(l) != list :
            m.append(l)
        else:
            flatten(l,m)
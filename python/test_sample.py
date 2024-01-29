def inc(x):
    return x + 1


def test_inc1(record_property):
    record_property('assertions', 'ATP-2')
    assert inc(1) == 2


def test_inc2(record_property):
    record_property('tested-item-id', 'ATP-2')
    assert inc(2) == 3


def test_inc3(record_xml_attribute):
    record_xml_attribute('assertions', 'ATP-2')
    assert inc(3) == 4


def test_inc4(record_xml_attribute):
    record_xml_attribute('tested-item-id', 'ATP-2')
    assert inc(4) == 5

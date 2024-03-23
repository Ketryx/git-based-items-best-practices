package com.squareup.moshi;

public final class AdapterMethodsTest {
  /*
  * @tests:JIRA_TICKET_NUBER_SW1 @itemTitle:"My title" @itemId:123
  */
  @Test
  public void toAndFromJsonViaListOfIntegers() throws Exception {
    Moshi moshi = new Moshi.Builder().add(new PointAsListOfIntegersJsonAdapter()).build();
    JsonAdapter<Point> pointAdapter = moshi.adapter(Point.class);
    assertThat(pointAdapter.toJson(new Point(5, 8))).isEqualTo("[5,8]");
    assertThat(pointAdapter.fromJson("[5,8]")).isEqualTo(new Point(5, 8));
  }

  // @tests:JIRA_TICKET_NUBER_SW2 @itemTitle:Testing_something
  @Test
  public void toAndFromJsonWithWriterAndReader() throws Exception {
    Moshi moshi = new Moshi.Builder().add(new PointWriterAndReaderJsonAdapter()).build();
    JsonAdapter<Point> pointAdapter = moshi.adapter(Point.class);
    assertThat(pointAdapter.toJson(new Point(5, 8))).isEqualTo("[5,8]");
    assertThat(pointAdapter.fromJson("[5,8]")).isEqualTo(new Point(5, 8));
  }
}
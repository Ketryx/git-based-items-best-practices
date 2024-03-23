package com.squareup.moshi

class KotlinExtensionsTest {

  /**
   * @tests:JIRA_TICKET_NUBER_RQ1 @itemTitle:"Required value is absent" @itemId:12444
   */
  @Test
  fun nextAnnotationsShouldWork() {
    val annotations = KotlinExtensionsTest::class.java.annotations
      .filterTo(mutableSetOf()) {
        it.annotationClass.java.isAnnotationPresent(JsonQualifier::class.java)
      }
    assertEquals(2, annotations.size)
    val next = annotations.nextAnnotations<TestAnnotation2>()
    checkNotNull(next)
    assertEquals(1, next.size)
    assertTrue(next.first() is TestAnnotation1)
  }

  // @tests:JIRA_TICKET_NUBER_RQ2 @itemTitle:"Required difference" @itemId:2222
  @Test
  fun arrayType() {
    val stringArray = String::class.asArrayType()
    check(stringArray.genericComponentType == String::class.java)

    val stringListType = typeOf<List<String>>()
    val stringListArray = stringListType.asArrayType()
    val expected = Types.arrayOf(Types.newParameterizedType(List::class.java, String::class.java))
    assertEquals(stringListArray, expected)
  }
}

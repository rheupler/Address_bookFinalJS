describe('Contact', function() {
  it("creates a new contact with the given specifications", function() {
    var testContact = new Contact("Rita", "Moreno");
    expect(testContact.firstName).to.eq("Rita");
    expect(testContact.lastName).to.eq("Moreno");
    expect(testContact.addresses).to.eql([]);
  });

  it('adds full name to all contacts', function() {
    var testContact = new Contact("James", "EarlJones");
    expect(testContact.fullName()).to.eq("James EarlJones");
  });
});

describe('Address', function() {
  it('returns full address with given specifications', function() {
    var testAddress = new Address("123 Test St", "Portland", "Oregon");
    expect(testAddress.street).to.eq("123 Test St");
    expect(testAddress.city).to.eq("Portland");
    expect(testAddress.state).to.eq("Oregon");
  });

  it('returns full address', function() {
    var testAddress = new Address("123 Test Street", "Portland", "Oregon");
    expect(testAddress.fullAddress()).to.eq("123 Test Street, Portland, Oregon")
  });
});

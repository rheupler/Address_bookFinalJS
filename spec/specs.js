describe('contact', function() {
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

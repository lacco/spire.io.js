describe('spire.requests.channels.create', function(){
  var session
  ;

  beforeEach(function(){
    helpers.account(function(err, data){
      if (err) throw err;
      else session = data;

      spire.options.key = data.resources.account.key;
    });
  });

  it('should exist', function(){
    expect(spire.requests.channels.create).toBeDefined();
  });

  it('should create a channel', function(){
    var callback = sinon.spy()
      , options = { session: session
        , name: helpers.randomChannelName()
        }
    ;

    spire.requests.channels.create(options, callback);

    waitsFor(function(){ return callback.called; }
    , 'waiting on the channel creation request'
    , 10000);

    runs(function(){
      var err = callback.getCall(0).args[0]
        , channel = callback.getCall(0).args[1]
      ;

      expect(err).toBeFalsy();

      expect(channel).toBeAResourceObject();
      expect(channel).toHaveACapability();
      expect(channel.name).toBeDefined();
    });
  });

  describe('when there are errors', function(){
    var stub
      , session
    ;

    beforeEach(function(){
      helpers.account(function(err, data){
        if (err) throw err;
        else session = data;

        spire.options.key = data.resources.account.key;

        helpers.shred.stub(spire.shred, sinon);
      });
    });

    afterEach(function(){
      helpers.shred.restore(spire.shred);
    });

    it('should pass errors to the callback', function(){
      var callback = sinon.spy()
        , options = { session: session
          , name: helpers.randomChannelName()
          }
      ;

      spire.requests.channels.create(options, callback);

      waitsFor(function(){ return callback.called; }
      , 'waiting on the channel creation request'
      , 10000);

      runs(function(){
        var err = callback.getCall(0).args[0]
        ;

        expect(err).toBeTruthy();
      });
    });
  }); // describe('when there are errors', ...
});

const levelInfo = [
    {
      hint: false,
      car: 'track',
      challenge: "Add tracks",
      answer: `const myTracks = [];`,
      action: () => {
        const rail = document.createElement("img");
        rail.src = "/img/track.svg";
        train.appendChild(rail);
      },
    },
    {
      hint: false,
      car: 'engine',
      challenge: 'Add engine',
      answer: "myTracks.push(‘engine’);",
      action: () => {
        myTracks.push("engine");
        actionPush('engine');
      },
    },
    {
        hint: false,
        car: 'boxcar',
        challenge:
          "Add Boxcar",
        answer: `myTracks.push('boxcar');`,
        action: function() {
          myTracks.push(this.boxcar);
          actionPush('boxcar');
          console.log(this.boxcar);
        },
      },
  ];
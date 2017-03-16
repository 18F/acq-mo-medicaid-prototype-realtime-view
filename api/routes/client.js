module.exports = function loginRoute(app) {
  app.get('/client/:dcn', (req, res) => {
    const dcn = req.params.dcn;
    if (clients[dcn]) {
      res.send(clients[dcn]);
    } else {
      res.status(404).send('DCN not found');
    }
  });
};

const clients = {
  123456789: {
    dcn: '123456789',
    people: {
      primary: 'George Stanley Langdon',
      others: ['Brenda Smith Langdon', 'Alan Lawrence Langdon', 'Jessica Brenda Langdon', 'Rhoda Anne Langdon'],
      address: [
        '2266 Ash Avenue',
        'St. Louis, MO 63101'
      ],
      phone: '314-815-8834'
    },
    eligibility: 'Medicaid eligibility code here',
    coverage: 'Not covered',
    spenddown: {
      monthlyAmount: 100.00,
      owed: 20,
      contributions: [
        {
          amount: 40,
          status: 'paid',
          to: 'Dr. Guadalupe Lewis'
        },
        {
          amount: 20,
          status: 'unpaid',
          to: 'Dr. Patty Collins'
        },
        {
          amount: 20,
          status: 'direct'
        }
      ],
      paymentHistory: [
        {
          amount: 100,
          received: Date.UTC(2017, 1, 9),
          applied: Date.UTC(2017, 1, 10),
          month: {
            start: Date.UTC(2017, 1, 10),
            end: Date.UTC(2017, 2, 9)
          }
        },
        {
          amount: 100,
          received: Date.UTC(2017, 0, 9),
          applied: Date.UTC(2017, 0, 10),
          month: {
            start: Date.UTC(2017, 0, 10),
            end: Date.UTC(2017, 1, 9)
          }
        },
        {
          amount: 50,
          received: Date.UTC(2016, 11, 1),
          applied: Date.UTC(2016, 11, 1),
          month: {
            start: Date.UTC(2016, 11, 1),
            end: Date.UTC(2016, 11, 31)
          }
        },
        {
          amount: 100,
          received: Date.UTC(2016, 9, 15),
          applied: Date.UTC(2016, 9, 16),
          month: {
            start: Date.UTC(2016, 9, 16),
            end: Date.UTC(2016, 10, 15)
          }
        }
      ]
    }
  }
};

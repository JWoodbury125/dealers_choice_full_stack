const Sequelize = require("sequelize");
const db = new Sequelize(
  process.env.DATABASE_URL || "postgres://localhost/dealers_choice_full_stack"
);

const Member = db.define("member", {
  name: {
    type: Sequelize.STRING,
    allowsNull: false,
  },
});

const Dues = db.define("dues", {
  paymentFor: {
    type: Sequelize.ENUM("Annual", "Monthly", "Event"),
    defaultValue: "Monthly",
  },
  paymentAmount: {
    type: Sequelize.INTEGER,
  },
  paymentDate: {
    type: Sequelize.DATEONLY,
  },
});

Member.hasMany(Dues);
Dues.belongsTo(Member);

const syncAndSeed = async () => {
  await db.sync({ force: true });
  const jennifer = await Member.create({
    name: "Jennifer Woodbury",
  });
  const keisha = await Member.create({
    name: "Keisha Cole",
  });
  const tenisha = await Member.create({
    name: "Tenisha Almon",
  });
  const gretchen = await Member.create({
    name: "Gretchen Jefferson",
  });
  const doreen = await Member.create({
    name: "Doreen Figueroa",
  });
  await Dues.create({
    paymentFor: "Annual",
    paymentAmount: 2350,
    paymentDate: "2022-03-01",
    memberId: jennifer.id,
  });
  await Dues.create({
    paymentFor: "Monthly",
    paymentAmount: 250,
    paymentDate: "2022-02-01",
    memberId: jennifer.id,
  });
  await Dues.create({
    paymentFor: "Annual",
    paymentAmount: 1350,
    paymentDate: "2022-01-15",
    memberId: gretchen.id,
  });
  await Dues.create({
    paymentFor: "Monthly",
    paymentAmount: 350,
    paymentDate: "2022-03-01",
    memberId: tenisha.id,
  });
  await Dues.create({
    paymentFor: "Annual",
    paymentAmount: 350,
    paymentDate: "2022-02-28",
    memberId: keisha.id,
  });
  await Dues.create({
    paymentFor: "Annual",
    paymentAmount: 1550,
    paymentDate: "2022-03-05",
    memberId: doreen.id,
  });
  await Dues.create({
    paymentFor: "Monthly",
    paymentAmount: 350,
    paymentDate: "2022-03-05",
    memberId: gretchen.id,
  });
  await Dues.create({
    paymentFor: "Event",
    paymentAmount: 350,
    paymentDate: "2022-03-01",
    memberId: doreen.id,
  });
};

module.exports = { db, Member, Dues, syncAndSeed };

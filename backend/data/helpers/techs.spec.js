const db = require("../db")
const techsModel = require("./techs.model")

beforeEach(async () => {
  await db.seed.run()
})

describe("techs models", async () => {
  test("testing", async () => {
    expect(2 + 2).toBe(4)
  })
})
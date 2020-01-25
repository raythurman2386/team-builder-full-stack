const db = require("../db")
const techsModel = require("./techs.model")

beforeEach(async () => {
  await db.seed.run()
})

describe("techs models", () => {
  test("get techs", async () => {
    const res = await techsModel.getTechs()
    expect(res.length).toBe(6)
  })

  test("get tech by id", async () => {
    const res = await techsModel.getTechById(1)
    expect(res.name).toMatch(/herb/i)
  })

  test("get tech jobs", async () => {
    const res = await techsModel.getTechnicianJobs(1)
    expect(res.length).toBeGreaterThan(0)
  })

  test("add tech", async () => {
    const res = await techsModel.insert({ name: "test" })
    expect(res.id).toBe(7)
  })
})
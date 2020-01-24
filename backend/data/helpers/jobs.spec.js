const db = require("../db")
const jobsModel = require("./jobs.model")

beforeEach(async () => {
  await db.seed.run()
})

describe("jobs models", () => {
  test("get jobs", async () => {
    const res = await jobsModel.getJobs()
    expect(res.length).toBe(15)
  })

  test("get job by id", async () => {
    const res = await jobsModel.getJobById(1)
    expect(res.machine).toBe("259d")
  })

  test("add job", async () => {
    const job = {
      machine: "test",
      complaint: "test",
      tech_id: 1
    }

    const res = await jobsModel.addJob(job)
    expect(res.id).toBe(18)
  })

  test("update job", async () => {
    const job = {
      id: 1,
      machine: "test",
      complaint: "test",
      tech_id: 1
    }

    const res = await jobsModel.updateJob(1, job)
    expect(res).toBe(1)
  })

  test("delete job", async () => {
    const res = await jobsModel.deleteJob(1)
    expect(res.id).toBe(1)
  })
})
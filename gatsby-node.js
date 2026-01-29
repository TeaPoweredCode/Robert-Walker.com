exports.createSchemaCustomization = ({ actions }) => {
  const { createTypes } = actions

  createTypes(`
    type ProjectsJson implements Node {
      projectLinks: ProjectLinks
    }

    type ProjectLinks {
      GitHub: String
      Chrome: String
      Firefox: String
      CurseForge: String
    }
  `)
}
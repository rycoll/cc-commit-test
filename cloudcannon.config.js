

module.exports = {

    commit_templates: [
      {
        template_string: "{message}{skip_ci|if=skip_checks}",
        _inputs: {
          skip_checks: {
            type: "checkbox"
          },
          message: {
            type: "textarea"
          }
        },
        extra_data: {
          skip_ci: "\n\n\nskip-checks:true"
        }
      }
    ]
    
  }
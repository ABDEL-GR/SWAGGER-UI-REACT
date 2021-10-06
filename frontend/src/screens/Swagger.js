import React, { Component } from 'react'
import './App.css';
import SwaggerUI from "swagger-ui-react"
import "swagger-ui-react/swagger-ui.css"
import SwaggerEditor, {plugins} from 'swagger-editor';
import 'swagger-editor/dist/swagger-editor.css';

 class Swagger extends Component {
  componentDidMount() {
    window.editor = SwaggerEditor({
      dom_id: '#swagger-editor',
      layout: 'EditorLayout',
      plugins: Object.values(plugins),
      swagger2GeneratorUrl: 'https://generator.swagger.io/api/swagger.json',
      oas3GeneratorUrl: 'https://generator3.swagger.io/openapi.json',
      swagger2ConverterUrl: 'https://converter.swagger.io/api/convert',
  });
  }
  render() {
    return (
      <div id='swagger-editor'>
        
      </div>
    )
  }
}
export default Swagger;

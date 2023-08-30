import { ITypeAction } from "@/types/nonprimitive_types";
import './options.css';
import { keywords } from "@/data/data";
import DefaultButton from "../buttons/DefaultButton";

export const options: ITypeAction<string>[] = [
    {
      Type: "Main wishes",
      Action: function () {
        return (
          <div className="component-high">
            <div className="component-flex">
              <textarea 
                placeholder="Please describe your project with maximum details"
                className="area"
              />
            </div>
            <div className="component-container component-flex borders mag-b pad">
            <p className="sub-text p-5">Or if you already have an example of your website, just upload some files</p>
              <label htmlFor="image-upload">
                <div className="file-upload">
                  <img src="/icons/upload_file.svg" alt="" />
                  <p>Upload picture</p>
                </div>
              </label>
              <input
                id="image-upload"
                type="file"
                style={{ display: 'none' }}
              />
            </div>
          </div>
        );
      },
    },
    {
      Type: "Keywords",
      Action: function () {
        return(
          <div className="component-high">
            <p className="sub-text p-5">What should also add:</p>
            <div className="component-high-row mag-b">
              {keywords.sort((a, b) => Math.random() - 0.5).map((k, id) => {
                return(
                  <div key={id} className="keyword">+ {k}</div>
                )
              })}
            </div>
          </div>
        )
      },
    },
    {
      Type: "Overview",
      Action: function () {},
    },
  ];
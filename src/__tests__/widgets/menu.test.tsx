import React from 'react';
import noop from 'lodash/noop';
import { BrowserRouter } from 'react-router-dom';
import { renderWithTheme } from '../../testHelpers';
import { Menu, menuConfig, LangType } from '../../widgets/Menu';

/**
 * @see https://jestjs.io/docs/en/manual-mocks
 */
Object.defineProperty(window, 'matchMedia', {
  writable: true,
  value: jest.fn().mockImplementation((query) => ({
    matches: false,
    media: query,
    onchange: null,
    addListener: jest.fn(), // deprecated
    removeListener: jest.fn(), // deprecated
    addEventListener: jest.fn(),
    removeEventListener: jest.fn(),
    dispatchEvent: jest.fn(),
  })),
});

const langs: LangType[] = [...Array(20)].map((_, i) => ({ code: `en${i}`, language: `English${i}` }));

it('renders correctly', () => {
  const { asFragment } = renderWithTheme(
    <BrowserRouter>
      <Menu
        account="0xbdda50183d817c3289f895a4472eb475967dc980"
        login={noop}
        logout={noop}
        isDark={false}
        toggleTheme={noop}
        langs={langs}
        setLang={noop}
        currentLang="EN"
        yogiPriceUsd={0.23158668932877668}
        links={menuConfig}
      >
        body
      </Menu>
    </BrowserRouter>,
  );

  expect(asFragment()).toMatchInlineSnapshot(`
    <DocumentFragment>
      <div
        class="sc-kLgntA hmuPEi"
      >
        <nav
          class="sc-iktFzd kdceaU"
        >
          <div
            class="sc-gsTCUz sc-dlfnbm jLyPtw byPlie"
          >
            <button
              aria-label="Toggle menu"
              class="sc-eCssSg eHfFDD sc-jSgupP hXVEay"
              scale="md"
            >
              <svg
                class="sc-hKgILt eSZDIM"
                color="textSubtle"
                viewBox="0 0 24 24"
                width="24px"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path
                  d="M4 18H20C20.55 18 21 17.55 21 17C21 16.45 20.55 16 20 16H4C3.45 16 3 16.45 3 17C3 17.55 3.45 18 4 18ZM4 13H20C20.55 13 21 12.55 21 12C21 11.45 20.55 11 20 11H4C3.45 11 3 11.45 3 12C3 12.55 3.45 13 4 13ZM3 7C3 7.55 3.45 8 4 8H20C20.55 8 21 7.55 21 7C21 6.45 20.55 6 20 6H4C3.45 6 3 6.45 3 7Z"
                />
              </svg>
            </button>
            <a
              aria-label="Home page"
              class="sc-gKsewC gIywjt"
              href="/"
            >
              <svg
                class="sc-hKgILt zpqXs mobile-icon"
                color="text"
                viewBox="0 0 26 26"
                width="20px"
                xmlns="http://www.w3.org/2000/svg"
              >
                <image
                  height="26"
                  href="/images/yogi/logo.png"
                />
              </svg>
              <svg
                class="sc-hKgILt zpqXs desktop-icon"
                color="text"
                viewBox="0 0 205 26"
                width="20px"
                xmlns="http://www.w3.org/2000/svg"
              >
                <image
                  height="26"
                  href="/images/yogi/logoWithText.png"
                />
              </svg>
            </a>
          </div>
          <div
            class="sc-gsTCUz sc-dlfnbm jLyPtw byPlie"
          >
            <div>
              <button
                class="sc-eCssSg jKEygN"
                scale="sm"
              >
                0xbd...c980
              </button>
            </div>
          </div>
        </nav>
        <div
          class="sc-jJEJSO hYddnZ"
        >
          <div
            class="sc-dmlrTW ioyBtf"
          >
            <div
              class="sc-kEjbxe fnkFQx"
            >
              <div
                class="sc-fubCfw dYLyWh"
                role="button"
              >
                <a
                  aria-current="page"
                  class="active"
                  href="/"
                  target="_self"
                >
                  <svg
                    class="sc-hKgILt daVdFi"
                    color="text"
                    viewBox="0 0 24 24"
                    width="24px"
                    xmlns="http://www.w3.org/2000/svg"
                  >
                    <path
                      d="M9.99998 19V14H14V19C14 19.55 14.45 20 15 20H18C18.55 20 19 19.55 19 19V12H20.7C21.16 12 21.38 11.43 21.03 11.13L12.67 3.59997C12.29 3.25997 11.71 3.25997 11.33 3.59997L2.96998 11.13C2.62998 11.43 2.83998 12 3.29998 12H4.99998V19C4.99998 19.55 5.44998 20 5.99998 20H8.99998C9.54998 20 9.99998 19.55 9.99998 19Z"
                    />
                  </svg>
                  <div
                    class="sc-iBPRYJ fNYuxK"
                  >
                    Home
                  </div>
                </a>
              </div>
              <div
                class="sc-pFZIQ kJqcph"
              >
                <div
                  class="sc-fubCfw jpCkbP"
                  role="button"
                >
                  <svg
                    class="sc-hKgILt daVdFi"
                    color="text"
                    viewBox="0 0 24 24"
                    width="24px"
                    xmlns="http://www.w3.org/2000/svg"
                  >
                    <path
                      clip-rule="evenodd"
                      d="M18.86 4.86003L21.65 7.65003C21.84 7.84003 21.84 8.16003 21.64 8.35003L18.85 11.14C18.54 11.46 18 11.24 18 10.79V9.00003H4C3.45 9.00003 3 8.55003 3 8.00003C3 7.45003 3.45 7.00003 4 7.00003H18V5.21003C18 4.76003 18.54 4.54003 18.86 4.86003ZM5.14001 19.14L2.35001 16.35C2.16001 16.16 2.16001 15.84 2.36001 15.65L5.15001 12.86C5.46001 12.54 6.00001 12.76 6.00001 13.21V15H20C20.55 15 21 15.45 21 16C21 16.55 20.55 17 20 17H6.00001V18.79C6.00001 19.24 5.46001 19.46 5.14001 19.14Z"
                      fill-rule="evenodd"
                    />
                  </svg>
                  <div
                    class="sc-iBPRYJ fNYuxK"
                  >
                    Trade
                  </div>
                  <svg
                    class="sc-hKgILt zpqXs"
                    color="text"
                    viewBox="0 0 24 24"
                    width="20px"
                    xmlns="http://www.w3.org/2000/svg"
                  >
                    <path
                      d="M8.71005 11.71L11.3001 14.3C11.6901 14.69 12.3201 14.69 12.7101 14.3L15.3001 11.71C15.9301 11.08 15.4801 10 14.5901 10H9.41005C8.52005 10 8.08005 11.08 8.71005 11.71Z"
                    />
                  </svg>
                </div>
                <div
                  class="sc-jrAGrp esAozr"
                />
              </div>
              <div
                class="sc-fubCfw jpCkbP"
                role="button"
              >
                <a
                  href="/farms"
                  target="_self"
                >
                  <svg
                    class="sc-hKgILt daVdFi"
                    color="text"
                    viewBox="0 0 24 24"
                    width="24px"
                    xmlns="http://www.w3.org/2000/svg"
                  >
                    <path
                      d="M13.7803 2.71967C14.0732 3.01256 14.0732 3.48744 13.7803 3.78033L12.8107 4.75L14.0307 5.96999H20C21.1 5.96999 22 6.86999 22 7.96999V12.73C21.28 12.25 20.43 11.97 19.5 11.97C17.19 11.97 15.3 13.73 15.05 15.97H11.91C11.96 15.64 12 15.31 12 14.97C12 13.43 11.41 12.03 10.46 10.97H11C12.1 10.97 13 10.07 13 8.96999V7.06068L11.75 5.81066L10.7803 6.78033C10.4874 7.07322 10.0126 7.07322 9.71967 6.78033C9.42678 6.48744 9.42678 6.01256 9.71967 5.71967L12.7197 2.71967C13.0126 2.42678 13.4874 2.42678 13.7803 2.71967Z"
                    />
                    <path
                      clip-rule="evenodd"
                      d="M11 15C11 17.7614 8.76142 20 6 20C3.23858 20 1 17.7614 1 15C1 12.2386 3.23858 10 6 10C8.76142 10 11 12.2386 11 15ZM9 15C9 16.6569 7.65685 18 6 18C4.34315 18 3 16.6569 3 15C3 13.3431 4.34315 12 6 12C7.65685 12 9 13.3431 9 15Z"
                      fill-rule="evenodd"
                    />
                    <path
                      clip-rule="evenodd"
                      d="M19.5 12.97C17.57 12.97 16 14.54 16 16.47C16 18.4 17.57 19.97 19.5 19.97C21.43 19.97 23 18.4 23 16.47C23 14.54 21.43 12.97 19.5 12.97ZM19.5 17.97C18.67 17.97 18 17.3 18 16.47C18 15.64 18.67 14.97 19.5 14.97C20.33 14.97 21 15.64 21 16.47C21 17.3 20.33 17.97 19.5 17.97Z"
                      fill-rule="evenodd"
                    />
                    <path
                      d="M9 8.96997H4C3.45 8.96997 3 8.52997 3 7.96997C3 7.41997 3.45 6.96997 4 6.96997H7C8.1 6.96997 9 7.86997 9 8.96997Z"
                    />
                  </svg>
                  <div
                    class="sc-iBPRYJ fNYuxK"
                  >
                    Farms
                  </div>
                </a>
              </div>
              <div
                class="sc-fubCfw jpCkbP"
                role="button"
              >
                <a
                  href="https://github.com/yogi-fi"
                  target="_blank"
                >
                  <svg
                    class="sc-hKgILt daVdFi"
                    color="text"
                    viewBox="0 0 24 24"
                    width="24px"
                    xmlns="http://www.w3.org/2000/svg"
                  >
                    <path
                      d="m12 .5c-6.63 0-12 5.28-12 11.792 0 5.211 3.438 9.63 8.205 11.188.6.111.82-.254.82-.567 0-.28-.01-1.022-.015-2.005-3.338.711-4.042-1.582-4.042-1.582-.546-1.361-1.335-1.725-1.335-1.725-1.087-.731.084-.716.084-.716 1.205.082 1.838 1.215 1.838 1.215 1.07 1.803 2.809 1.282 3.495.981.108-.763.417-1.282.76-1.577-2.665-.295-5.466-1.309-5.466-5.827 0-1.287.465-2.339 1.235-3.164-.135-.298-.54-1.497.105-3.121 0 0 1.005-.316 3.3 1.209.96-.262 1.98-.392 3-.398 1.02.006 2.04.136 3 .398 2.28-1.525 3.285-1.209 3.285-1.209.645 1.624.24 2.823.12 3.121.765.825 1.23 1.877 1.23 3.164 0 4.53-2.805 5.527-5.475 5.817.42.354.81 1.077.81 2.182 0 1.578-.015 2.846-.015 3.229 0 .309.21.678.825.56 4.801-1.548 8.236-5.97 8.236-11.173 0-6.512-5.373-11.792-12-11.792z"
                    />
                  </svg>
                  <div
                    class="sc-iBPRYJ fNYuxK"
                  >
                    Github
                  </div>
                </a>
              </div>
              <div
                class="sc-fubCfw jpCkbP"
                role="button"
              >
                <a
                  href="https://medium.com/yogi-fi"
                  target="_blank"
                >
                  <svg
                    class="sc-hKgILt daVdFi"
                    color="text"
                    viewBox="0 0 24 24"
                    width="24px"
                    xmlns="http://www.w3.org/2000/svg"
                  >
                    <path
                      d="m.464 18.897 7.5 3.09c.497.204 1.04-.164 1.036-.697l-.034-5.647c19.12 9.52 12.525 6.236 13.952 6.947.498.243 1.082-.117 1.082-.673v-15.846c0-.91-1.902-1.474-7.616-4.413-.191-.129-.42-.182-.631-.151-.643-.001-.346-.16-4.907 7.269-.409-.672-.846-1.391-1.317-2.165-.767-1.263-.767-1.263-1.026-1.378-.01-.005-.02-.004-.03-.009-.005-.001-.008-.005-.013-.007l-7.407-3.265c-.495-.22-1.053.145-1.053.686v15.565c0 .304.184.578.464.694zm16.393-.971c.884-1.367 2.374-4.203 5.643-9.387v12.171zm-.831-14.77c3.58 1.843 5.318 2.659 6.174 3.089l-6.452 10.533c-.641-1.046-1.83-2.966-4.025-6.563 2.793-4.537 3.878-6.376 4.303-7.059zm-2.305 13.196-4.751-2.388-.014-.007-.033-5.463c1.738 2.844 4.719 7.728 4.798 7.858zm-12.221-12.563 5.91 2.605.083 13.777-5.993-2.469z"
                    />
                  </svg>
                  <div
                    class="sc-iBPRYJ fNYuxK"
                  >
                    Blog
                  </div>
                </a>
              </div>
            </div>
            <div
              class="sc-idOhPF bXwMqE"
            >
              <button
                class="sc-eCssSg dHWYSe sc-iqHYGH iOsNjo"
                scale="md"
              >
                <svg
                  class="sc-hKgILt zpqXs"
                  color="text"
                  viewBox="0 0 24 24"
                  width="20px"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <path
                    d="M19.43 12.98C19.47 12.66 19.5 12.34 19.5 12C19.5 11.66 19.47 11.34 19.43 11.02L21.54 9.37C21.73 9.22 21.78 8.95 21.66 8.73L19.66 5.27C19.54 5.05 19.27 4.97 19.05 5.05L16.56 6.05C16.04 5.65 15.48 5.32 14.87 5.07L14.49 2.42C14.46 2.18 14.25 2 14 2H9.99996C9.74996 2 9.53996 2.18 9.50996 2.42L9.12996 5.07C8.51996 5.32 7.95996 5.66 7.43996 6.05L4.94996 5.05C4.71996 4.96 4.45996 5.05 4.33996 5.27L2.33996 8.73C2.20996 8.95 2.26996 9.22 2.45996 9.37L4.56996 11.02C4.52996 11.34 4.49996 11.67 4.49996 12C4.49996 12.33 4.52996 12.66 4.56996 12.98L2.45996 14.63C2.26996 14.78 2.21996 15.05 2.33996 15.27L4.33996 18.73C4.45996 18.95 4.72996 19.03 4.94996 18.95L7.43996 17.95C7.95996 18.35 8.51996 18.68 9.12996 18.93L9.50996 21.58C9.53996 21.82 9.74996 22 9.99996 22H14C14.25 22 14.46 21.82 14.49 21.58L14.87 18.93C15.48 18.68 16.04 18.34 16.56 17.95L19.05 18.95C19.28 19.04 19.54 18.95 19.66 18.73L21.66 15.27C21.78 15.05 21.73 14.78 21.54 14.63L19.43 12.98ZM12 15.5C10.07 15.5 8.49996 13.93 8.49996 12C8.49996 10.07 10.07 8.5 12 8.5C13.93 8.5 15.5 10.07 15.5 12C15.5 13.93 13.93 15.5 12 15.5Z"
                  />
                </svg>
              </button>
            </div>
          </div>
          <div
            class="sc-hiSbYr crsCoN"
          >
            body
          </div>
          <div
            class="sc-bdfBwQ sc-gWHgXt bQcnNj IZmxf"
            role="presentation"
          />
        </div>
      </div>
    </DocumentFragment>
  `);
});

import Link from 'next/link';
import {Accordion, AccordionTab} from 'primereact/accordion';
import cn from 'classname';

export default function renderTemplate({tag, content, index, styles}) {
  switch (tag) {
    case 'p':
      return <p key={index} className={styles.paragraph}>
        {
          Array.isArray(content)?
          content.map((data, index) => {
            switch (data.tag) {
              case 'a':
                return <Link key={index} href={data.link}>
                  <a className={styles.link}>{data.text}</a>
                </Link>;

              case 'mark':
                return <mark key={index} className={styles.mark}>
                  {data.text}
                </mark>;

              default:
                return data;
            }
          }) :
          content
        }
      </p>;

    case 'h1':
      return <h1 key={index} className={styles.title}>{content}</h1>;

    case 'h3':
      return <h3 key={index} className={styles.heading}>{content}</h3>;

    case 'h4':
      return <h4 key={index} className={styles.heading}>{content}</h4>;

    case 'code':
      return <blockquote key={index} className={styles.code}>
        <pre>{content}</pre>
      </blockquote>;

    case 'accordion-code':
      return <Accordion key={index}>
        <AccordionTab
          contentClassName='acc__content'
          header={content.header}
        >
          <blockquote className={cn(styles.code, styles.acc)}>
            <pre>
              {content.main.content}
            </pre>
          </blockquote>
        </AccordionTab>
      </Accordion>;

    case 'li':
      return <div key={index}>
        {
          content.map((list, index) => {
            return <li key={`list-${index}`} className={styles.list}>
              {list}
            </li>;
          })
        }
      </div>;

    case 'li>a':
      return <div key={index}>
        {
          content.map((list, index) => {
            if (typeof list === 'object') {
              return <li key={`list-${index}`} className={styles.list}>
                <Link href={list.link}>
                  <a className={styles.link}>{list.text}</a>
                </Link>
              </li>;
            }
            return <li key={`list-${index}`} className={styles.list}>
              {list}
            </li>;
          })
        }
      </div>;

    case 'table':
      return <table key={index} className={styles.table} >
        <thead className={styles.t_head}>
          <tr>
            {
              content.head.map((text, i) => {
                return <th key={`head-${i}`}>{text}</th>;
              })
            }
          </tr>
        </thead>
        <tbody>
          {
            content.body.map((row, index) => {
              return <tr key={`row-${index}`} className={styles.t_body}>
                {
                  row.map((text, i) => {
                    return <td key={`cell-${i}`}>{text}</td>;
                  })
                }
              </tr>;
            })
          }
        </tbody>
      </table>;

    default:
      return;
  }
}

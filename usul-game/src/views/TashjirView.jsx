import React from 'react';

const TashjirView = ({ onBack }) => {
  const styles = {
    container: { padding: '40px 20px', direction: 'rtl', textAlign: 'center', backgroundColor: '#f8fafc', minHeight: '100vh' },
    treeWrapper: { display: 'flex', flexDirection: 'column', alignItems: 'center', marginTop: '40px' },
    branch: { display: 'flex', justifyContent: 'center', gap: '20px', width: '100%', marginTop: '20px' },
    node: (color) => ({
      padding: '15px 25px',
      borderRadius: '12px',
      background: color || '#fff',
      boxShadow: '0 4px 6px rgba(0,0,0,0.1)',
      fontWeight: 'bold',
      border: '2px solid #e2e8f0',
      minWidth: '120px'
    }),
    line: { width: '2px', height: '30px', background: '#cbd5e1' }
  };

  return (
    <div style={styles.container}>
      <button onClick={onBack} style={{ float: 'right', padding: '10px 20px', borderRadius: '10px', border: 'none', cursor: 'pointer' }}>⬅️ عودة</button>
      
      <h1 style={{ color: '#1e3a8a', fontSize: '2.5rem' }}>التشجير الكامل لأصول الفقه</h1>
      
      <div style={styles.treeWrapper}>
        {/* Root */}
        <div style={styles.node('#3b82f6')}>أصول الفقه</div>
        <div style={styles.line}></div>

        {/* Level 1 Branches */}
        <div style={styles.branch}>
          <div style={{ display: 'flex', flexDirection: 'column', alignItems: 'center' }}>
            <div style={styles.node('#60a5fa')}>الأدلة (Sources)</div>
            <div style={styles.line}></div>
            <div style={styles.branch}>
               <div style={styles.node('#dbeafe')}>المتفق عليها</div>
               <div style={styles.node('#dbeafe')}>المختلف فيها</div>
            </div>
          </div>

          <div style={{ display: 'flex', flexDirection: 'column', alignItems: 'center' }}>
            <div style={styles.node('#60a5fa')}>الأحكام (Rules)</div>
            <div style={styles.line}></div>
            <div style={styles.branch}>
               <div style={styles.node('#dbeafe')}>التكليفية</div>
               <div style={styles.node('#dbeafe')}>الوضعية</div>
            </div>
          </div>
        </div>

        {/* Level 2 Detail Example */}
        <div style={{ marginTop: '40px', padding: '20px', background: '#fff', borderRadius: '20px', maxWidth: '800px' }}>
          <h3 style={{ color: '#1d42be' }}>تفاصيل الأحكام التكليفية</h3>
          <div style={{ display: 'flex', flexWrap: 'wrap', gap: '10px', justifyContent: 'center', marginTop: '10px' }}>
            {['إيجاب', 'ندب', 'تحريم', 'كراهة', 'إباحة'].map(t => (
              <span key={t} style={{ padding: '8px 15px', background: '#f1f5f9', borderRadius: '50px', border: '1px solid #cbd5e1' }}>{t}</span>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
};

export default TashjirView;
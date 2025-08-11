import React from 'react';
import { Button } from '../components/ui/button';
import { Input } from '../components/ui/input';
import { Sheet } from '../components/ui/sheet';
import '../src/App.css';

const UploadCSV = () => {
	return (
		<Sheet>
			<div
				className="upload-csv-container"
				style={{
					maxWidth: 420,
					margin: '70px auto',
					padding: 40,
					borderRadius: 24,
					boxShadow: '0 8px 32px rgba(0,0,0,0.12)',
					background: 'linear-gradient(135deg, #f8fafc 0%, #e0e7ff 100%)',
					display: 'flex',
					flexDirection: 'column',
					alignItems: 'center',
				}}
			>
				<div style={{
					width: 80,
					height: 80,
					borderRadius: '50%',
					background: 'linear-gradient(135deg, #6366f1 0%, #818cf8 100%)',
					display: 'flex',
					alignItems: 'center',
					justifyContent: 'center',
					marginBottom: 24,
					boxShadow: '0 2px 12px rgba(99,102,241,0.15)',
				}}>
					<svg width="40" height="40" fill="white" viewBox="0 0 24 24">
						<path d="M12 16V4m0 12l-4-4m4 4l4-4" stroke="white" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
						<rect x="3" y="16" width="18" height="4" rx="2" fill="white" opacity="0.2"/>
					</svg>
				</div>
				<h2 style={{
					textAlign: 'center',
					marginBottom: 18,
					fontWeight: 800,
					fontSize: 30,
					color: '#3730a3',
					letterSpacing: 1,
				}}>
					Upload CSV
				</h2>
				<p style={{
					textAlign: 'center',
					color: '#6366f1',
					fontSize: 16,
					marginBottom: 28,
				}}>
					Easily import your employee data by uploading a CSV file.<br />
					Only .csv files are supported.
				</p>
				<form style={{ width: '100%', display: 'flex', flexDirection: 'column', gap: 18 }}>
					<Input type="file" accept=".csv" style={{ padding: '12px', borderRadius: 12, border: '1px solid #c7d2fe', background: '#fff', fontSize: 16 }} />
					<Button type="button" style={{
						fontWeight: 700,
						fontSize: 18,
						padding: '12px 0',
						borderRadius: 12,
						background: 'linear-gradient(90deg, #6366f1 0%, #818cf8 100%)',
						color: '#fff',
						boxShadow: '0 2px 8px rgba(99,102,241,0.10)',
						transition: 'background 0.2s',
					}}>
						Upload
					</Button>
				</form>
			</div>
		</Sheet>
	);
};

export default UploadCSV;
